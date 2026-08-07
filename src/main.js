import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';

import { logger } from '@/utils/logger';
import { useAuthStore } from '@/stores/auth';

import '@/assets/tailwind.css';
import '@/assets/styles.scss';

// Initialize Firebase if VITE_USE_FIREBASE is set
const USE_FIREBASE = import.meta.env.VITE_USE_FIREBASE === 'true';
if (USE_FIREBASE) {
    import('@rootfirebase')
        .then(() => {
            logger.info('Firebase initialized in main.js');
        })
        .catch((err) => {
            logger.error('Failed to initialize Firebase:', err?.message || err);
            // Continue without Firebase if initialization fails
        });
}

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});

const authStore = useAuthStore();
authStore.initializeAuth();

app.mount('#app');
