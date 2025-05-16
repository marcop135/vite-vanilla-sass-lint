// vite.config.js
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import { createHtmlPlugin } from "vite-plugin-html";
import legacy from "@vitejs/plugin-legacy";
import stylelint from "vite-plugin-stylelint";
import eslint from "vite-plugin-eslint2";

export default defineConfig({
  root: "./",

  server: {
    port: 3000,
    open: false,
  },

  build: {
    minify: "terser", // Ensure Terser is used for production build
    terserOptions: {
      compress: {
        drop_console: true, // Remove all console logs
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

    // vite-plugin-imagemin
    // Vite plugin for compressing image assets
    // https://github.com/vbenjs/vite-plugin-imagemin
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
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
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
