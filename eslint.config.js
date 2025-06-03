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
      'no-unused-vars': 'warn',
    },
  },
]);
