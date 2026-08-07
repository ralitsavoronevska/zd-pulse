import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

// Vitest config — kept separate from `vite.config.mjs` so test runs don't drag
// in the Vite manual-chunking, gh-pages base path, primeicons font rewriter,
// and mock-data exclusion plugin (none of which are relevant to unit tests
// and the last one would silently empty the mock fixture during tests).
export default defineConfig({
    plugins: [vue()],

    resolve: {
        // Mirror the `@` → `src/` alias from vite.config.mjs so test files
        // can `import { ... } from '@/services/ticketApi'` the same way the
        // app does.
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },

    test: {
        // `globals: true` lets test files use `describe` / `it` / `expect`
        // without importing them. Saves boilerplate at the cost of one
        // extra config flag — worth it for ~50 future test files.
        globals: true,
        // happy-dom provides a DOM for any future component / composable
        // tests. Pure-JS tests would run fine in node, but the env adds
        // negligible startup overhead and keeps behavior consistent across
        // all test files. happy-dom is preferred over jsdom for Vue + vitest
        // — faster startup, lighter footprint, no functionality lost for our use.
        environment: 'happy-dom',
        // Match colocated `*.test.js` next to source files. Covers
        // `src/**/*.test.{js,ts}` and any future `tests/**/*.test.{js,ts}`
        // top-level folder.
        include: ['src/**/*.test.{js,ts}', 'tests/**/*.test.{js,ts}'],
        // The default reporter in vitest 4.x is broken on Windows — it fails
        // before any test runs with a `Cannot read properties of undefined
        // (reading 'config')` originating from the reporter's terminal probe,
        // making the whole suite look red. `dot` is the most compact reporter
        // that's known-good across platforms; switch back to `default` if a
        // future vitest release fixes the regression.
        reporters: ['dot']
    }
});
