import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    ignores: ['node_modules/', 'src/assets/js/vendor/'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'no-debugger': 'off',
      'no-undef': 'warn',
      'no-empty': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      eqeqeq: 'off',
      camelcase: 'off',
    },
  },
]);
