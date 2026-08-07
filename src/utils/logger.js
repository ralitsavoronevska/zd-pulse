// Thin logging facade — single place to later wire Sentry, user toasts,
// or dev-only filtering. `debug`/`info` are silenced in production; `warn`
// and `error` always flow through so operators still see them in the wild.

const isDev = import.meta.env.DEV;

export const logger = {
    debug: (...args) => {
        if (isDev) console.debug(...args);
    },
    info: (...args) => {
        if (isDev) console.info(...args);
    },
    warn: (...args) => {
        console.warn(...args);
    },
    error: (...args) => {
        console.error(...args);
    }
};
