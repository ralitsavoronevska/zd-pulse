// Flat-config (ESLint 10) replacement for the legacy `.eslintrc.cjs`.
//
// Why this exists: ESLint 10 dropped support for `.eslintrc.*` and removed the
// `--ext` / `--ignore-path` CLI flags the old npm script depended on. This
// config recreates the old behavior — Vue 3 essential rules + prettier
// compatibility — but in flat-config form.
//
// Kept deliberately minimal: only packages already in `node_modules` are
// imported here. If a future change wants `js.configs.recommended` it would
// pull in `@eslint/js` (and `globals` for the env it would otherwise flag).

import prettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';

export default [
    {
        ignores: ['node_modules/**', 'dist/**', 'public/fonts/**', 'coverage/**']
    },
    // `flat/essential` is the Vue 3 essential preset in flat-config form
    // (eslint-plugin-vue@10 dropped the `vue3-` prefix on flat keys).
    ...pluginVue.configs['flat/essential'],
    prettier,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/no-reserved-component-names': 'off',
            // Disable ESLint's built-in import sorting rule so this repo
            // does not enforce alphabetical reordering of imports.
            'sort-imports': 'off',
            // `vue/component-tags-order` was renamed to `vue/block-order`
            // in eslint-plugin-vue v9.
            'vue/block-order': [
                'error',
                {
                    order: ['script', 'template', 'style']
                }
            ]
        }
    }
];
