// vite.config.js
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import stylelint from 'vite-plugin-stylelint';
import eslint from 'vite-plugin-eslint2';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  root: './',

  server: {
    port: 3000,
    open: false,
    watch: {
      ignored: ['**/.stylelintcache', '**/.eslintcache'],
    },
  },

  build: {
    // Modern baseline matching .browserslistrc; cuts transpilation overhead.
    target: 'es2020',
    minify: 'terser',
    cssMinify: true,
    // Single-page site: a single CSS file is simpler and avoids extra requests.
    cssCodeSplit: false,
    // Inline assets up to 4 KB to reduce request count on a small static site.
    assetsInlineLimit: 4096,
    // Skip gzip-size computation during build for a faster build.
    reportCompressedSize: false,
    // Full sourcemaps for non-production builds (`vite build --mode development`),
    // hidden sourcemaps in production so prod JS does not advertise a sibling .map.
    sourcemap: mode === 'production' ? 'hidden' : true,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
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
    createHtmlPlugin({
      minify: true,
    }),
    eslint(),
    stylelint(),
    // Bundle analyzer: enabled when `npm run analyze` (vite build --mode analyze).
    // Writes dist/stats.html and opens it.
    mode === 'analyze' &&
      visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
}));
