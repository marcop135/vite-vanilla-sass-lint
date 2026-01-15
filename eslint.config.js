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
      'no-unused-vars': 'error',
      'no-debugger': 'off',
      'no-undef': 'error',
      'no-empty': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      eqeqeq: ['error', 'always'],
      camelcase: ['warn', { properties: 'always' }],
    },
  },
]);
