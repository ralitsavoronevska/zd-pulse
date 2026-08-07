import api from '@/services/authApi';
import { logger } from '@/utils/logger';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref } from 'vue';

const USE_FIREBASE = import.meta.env.VITE_USE_FIREBASE === 'true';
const TOKEN_ENDPOINT = '/api/token/';
const TOKEN_REFRESH_ENDPOINT = '/api/token/refresh/';
const LOGOUT_ENDPOINT = '/api/logout/';
// Cap the logout request so a slow/dead backend can't freeze the UI between
// click and redirect. On a healthy backend the call returns in ~200ms.
const LOGOUT_TIMEOUT_MS = 3000;

export const useAuthStore = defineStore('auth', () => {
    // Access + refresh tokens live in closure scope — NOT returned from the
    // store and NOT reactive refs. Keeps them out of Vue DevTools' reactive
    // graph and out of any accidental serialization (HMR, SSR). `username`
    // is whatever the user typed at login — the /api/token/ response carries
    // no user object, so it's all we have.
    //
    // Threat-model note: this is NOT XSS-proof. During an active session the
    // tokens still live here and on `api.defaults.headers.common.Authorization`,
    // and any XSS running in the tab can read both. What this buys us is
    // reduced surface area — DevTools no longer prints tokens on every state
    // snapshot — plus the existing refresh-clears-state behavior.
    let _access = null;
    let _refresh = null;
    let _username = null;
    const _authVersion = ref(0);

    // Firebase mode: User and role come from Firestore
    const user = ref(null); // { uid, email, displayName } or null
    const role = ref(null); // 'admin' | 'viewer' | null

    const isLoading = ref(false);
    const error = ref(null);

    const isAuthenticated = computed(() => {
        if (USE_FIREBASE) {
            return user.value?.uid !== null && user.value?.uid !== undefined;
        }
        _authVersion.value; // subscribe for JWT mode
        return _access !== null;
    });

    const username = computed(() => {
        if (USE_FIREBASE) {
            return user.value?.displayName || user.value?.email || null;
        }
        _authVersion.value;
        return _username;
    });

    function setAuthHeader(access) {
        if (access) api.defaults.headers.common['Authorization'] = `Bearer ${access}`;
        else delete api.defaults.headers.common['Authorization'];
    }

    function applyTokens(access, refresh, usernameValue) {
        _access = access;
        _refresh = refresh;
        if (usernameValue !== undefined) _username = usernameValue;
        _authVersion.value++;
    }

    /** Boolean probe for the interceptor — lets it decide whether a refresh
     *  attempt is worth making WITHOUT exposing the token itself. Closure
     *  scoping would be pointless if we handed the value back out. */
    function hasRefreshToken() {
        return _refresh !== null;
    }

    async function fetchUserDataFromFirestore(uid, email) {
        try {
            const { doc, getDoc } = await import('firebase/firestore');
            const { db } = await import('@rootfirebase');

            const userDocRef = doc(db, 'users', uid);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const data = userDocSnap.data();
                user.value = {
                    uid,
                    email,
                    displayName: data.displayName || null
                };
                role.value = data.role || null;
                logger.info(`Fetched Firestore user data for uid=${uid}`);
            } else {
                user.value = { uid, email, displayName: null };
                role.value = null;
                logger.warn(`Firestore user doc not found for uid=${uid}`);
            }
        } catch (err) {
            logger.error('Failed to fetch Firestore user doc:', err?.message || err);
            throw err;
        }
    }

    async function loginWithFirebase(email, password) {
        try {
            const { signInWithEmailAndPassword } = await import('firebase/auth');
            const { auth } = await import('@rootfirebase');
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const fbUser = userCredential.user;
            await fetchUserDataFromFirestore(fbUser.uid, fbUser.email);
            return { success: true };
        } catch (err) {
            const msg =
                err?.code === 'auth/user-not-found'
                    ? 'User not found'
                    : err?.code === 'auth/wrong-password'
                      ? 'Incorrect password'
                      : err?.code === 'auth/invalid-email'
                        ? 'Invalid email address'
                        : err?.code === 'auth/too-many-requests'
                          ? 'Too many attempts. Try again later.'
                          : err?.message || 'Login failed';
            error.value = msg;
            throw err;
        }
    }

    async function loginWithJWT(usernameInput, password) {
        try {
            const res = await api.post(TOKEN_ENDPOINT, { username: usernameInput, password });
            const data = res?.data;
            if (!data?.access || !data?.refresh) {
                throw new Error('Malformed login response');
            }
            applyTokens(data.access, data.refresh, usernameInput);
            setAuthHeader(data.access);
            return { success: true };
        } catch (err) {
            const data = err.response?.data;
            error.value = data?.detail || data?.non_field_errors?.[0] || err.message || 'Login failed';
            throw err;
        }
    }

    async function login(emailOrUsername, password) {
        error.value = null;
        isLoading.value = true;
        try {
            if (USE_FIREBASE) {
                return await loginWithFirebase(emailOrUsername, password);
            } else {
                return await loginWithJWT(emailOrUsername, password);
            }
        } finally {
            isLoading.value = false;
        }
    }

    /** Invoked by the authApi 401 interceptor. Rotates tokens per the spec
     *  (refresh response contains BOTH a new access and a new refresh). */
    async function refresh() {
        if (USE_FIREBASE) {
            throw new Error('Refresh not supported in Firebase mode');
        }
        if (!_refresh) throw new Error('No refresh token available');
        const res = await api.post(TOKEN_REFRESH_ENDPOINT, { refresh: _refresh });
        const data = res?.data;
        if (!data?.access) {
            throw new Error('Malformed refresh response');
        }
        // Rotating refresh tokens — keep the old one if the backend didn't
        // rotate (defensive; the reference backend does rotate).
        applyTokens(data.access, data.refresh ?? _refresh);
        setAuthHeader(data.access);
        return data.access;
    }

    function logout() {
        setAuthHeader(null);
        applyTokens(null, null, null);
        error.value = null;
    }

    /** Best-effort server-side logout (POST /api/logout/), then clear local
     *  state. The server call is awaited so the browser doesn't abort it
     *  mid-flight when the caller follows up with `window.location.href = ...`,
     *  but any failure (network blip, 401 from an already-dead access token)
     *  is swallowed — local cleanup must happen regardless. Capped at
     *  LOGOUT_TIMEOUT_MS so a dead backend can't freeze the redirect. */
    async function logout() {
        error.value = null;
        if (USE_FIREBASE) {
            try {
                // Firebase logout is async but we can't await here in all contexts
                (async () => {
                    try {
                        const { signOut } = await import('firebase/auth');
                        const { auth } = await import('@rootfirebase');
                        await signOut(auth);
                    } catch (err) {
                        logger.warn('Firebase signOut failed:', err?.message || err);
                    }
                })();
            } catch (err) {
                logger.warn('Firebase import failed:', err?.message || err);
            }
            user.value = null;
            role.value = null;
            return;
        }
        if (_access) {
            try {
                await api.post(LOGOUT_ENDPOINT, null, { timeout: LOGOUT_TIMEOUT_MS });
            } catch {
                // Swallow — see docstring.
            } finally {
                setAuthHeader(null);
                applyTokens(null, null, null);
                error.value = null;
            }
        }
    }

    function initializeAuth() {
        // Nothing to restore — tokens are in-memory only. On every fresh page
        // load the user starts unauthenticated and will be routed to /login.
        isLoading.value = false;
    }

    /** Clear the last login error — exposed so components don't have to
     *  reach in and mutate `error` directly from the outside. */
    function clearError() {
        error.value = null;
    }

    function hasRole(requiredRole) {
        if (!USE_FIREBASE) return false;
        return role.value === requiredRole;
    }

    return {
        isLoading,
        error,
        user,
        role,
        isAuthenticated,
        username,
        login,
        logout,
        refresh,
        initializeAuth,
        clearError,
        hasRefreshToken,
        hasRole
    };
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
