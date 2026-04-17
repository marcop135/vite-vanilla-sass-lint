// vite.config.js
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import legacy from '@vitejs/plugin-legacy';
import stylelint from 'vite-plugin-stylelint';
import eslint from 'vite-plugin-eslint2';

export default defineConfig({
  root: './',

  server: {
    port: 3000,
    open: false,
    watch: {
      ignored: ['**/.stylelintcache', '**/.eslintcache'],
    },
  },

  build: {
    minify: 'terser', // Ensure Terser is used for production build
    sourcemap: 'hidden', // Generate source maps but don't reference them in production
    terserOptions: {
      compress: {
        drop_console: true, // Remove all console logs
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor dependencies into separate chunk for better caching
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [
    // vite-plugin-html
    // Vite plugin for processing html
    // https://github.com/vbenjs/vite-plugin-html
    //
    // Features:
    // - HTML compression capability
    // - EJS template capability
    // - Multi-page application support
    // - Support custom entry
    // - Support custom template
    createHtmlPlugin({
      minify: true, // Minify HTML on build (Uses html-minifier-terser)
    }),

    // vite-plugin-eslint2
    // Vite plugin for linting JavaScript and TypeScript files
    // https://github.com/ModyQyW/vite-plugin-eslint2
    // Docs: https://vite-plugin-eslint2.modyqyw.top/
    [eslint()],

    // vite-plugin-stylelint
    // Vite plugin for linting styles with Stylelint
    // https://github.com/ModyQyW/vite-plugin-stylelint
    // Docs: https://vite-plugin-stylelint.modyqyw.top/guide/getting-started.html
    [stylelint()],

    // vite-plugin-legacy
    // Vite plugin for generating legacy builds
    // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});
