/**
 * Validate a `?redirect=` query value before handing it to `router.replace`.
 * Accepts only app-internal paths. Rejects:
 *   - non-strings / empty (e.g. array-valued query params)
 *   - absolute URLs (`http://...`, `https://...`, `mailto:...`)
 *   - protocol-relative (`//evil.com`) and backslash tricks (`/\evil.com`)
 *   - `/login` and `/login/*` — would cause a redirect ping-pong post-login
 *
 * @param {unknown} raw - Typically `route.query.redirect`
 * @returns {string} Safe path ('/' if `raw` is anything rejectable)
 */
export function safeRedirectPath(raw) {
    if (typeof raw !== 'string' || !raw) return '/';
    if (!raw.startsWith('/')) return '/';
    if (raw.startsWith('//') || raw.startsWith('/\\')) return '/';
    // Strip the path portion before comparing — `?redirect=/login?foo=bar`
    // should also be rejected, not just the bare `/login`.
    const pathOnly = raw.split(/[?#]/)[0];
    if (pathOnly === '/login' || pathOnly.startsWith('/login/')) return '/';
    return raw;
}
