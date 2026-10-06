import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import pluginCypress from 'eslint-plugin-cypress';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  globalIgnores(['dist']),
  pluginCypress.configs.recommended,
  daStyle,
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'linebreak-style': 'off',
    },
  },
]);
