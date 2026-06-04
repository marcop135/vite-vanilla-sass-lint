# CLAUDE.md

Guidance for working in this repo.

## Project

`vite-vanilla-sass-lint` is a Vite vanilla-JS + Sass starter template. It is a single static page: `index.html` mounts `#app`, and `src/assets/js/main.js` builds the DOM (`.wrapper` > `main` with `h1` + logo `img`, and a `footer` link). Styling is `src/assets/scss/main.scss` (uses `modern-normalize` and an animated gradient). Linting is ESLint + Stylelint + HTMLHint + html-validate; tests use Vitest; pre-commit runs lint-staged via Husky.

## Conventions

- ESM, single quotes, semicolons, 2-space indent, Prettier-formatted.
- SCSS uses `@use` and follows `stylelint-config-standard-scss`.
- The test suite pins the rendered DOM contract in `src/assets/js/main.test.js`: `.wrapper main h1` text is `Vite + Sass, No Fuss`, `.wrapper main img.logo` alt is `Vite logo`, and `.wrapper footer small a` points to the repo. Preserve these when editing `main.js`.

## Commands

- `npm run dev` (port 3000), `npm run build`, `npm run preview`
- `npm run lint`, `npm run lint:fix`, `npm run format`
- `npm run test:ci`, `npm run test:coverage`
- `npm run analyze` (bundle visualizer to `dist/stats.html`)
- `node scripts/screenshot.mjs <outDir>` captures the page at desktop/tablet/mobile (needs Playwright + system Chrome; see the `perf-audit` skill).

## Optimization pass (2026-06-04)

A performance/accessibility/SEO/code-quality audit made these changes:

- **Build** (`vite.config.js`): `target: es2020`, explicit `cssMinify`, `cssCodeSplit: false` (single CSS file), `assetsInlineLimit: 4096`, `reportCompressedSize: false`. `.browserslistrc` narrowed to `defaults and fully supports es6-module` + `not dead`.
- **Accessibility** (`main.scss`, `main.js`): `prefers-reduced-motion` disables the gradient animation and logo hover transform; `:focus-visible` outline on the footer link; stronger `text-shadow` on `.wrapper` for AA contrast; explicit `width`/`height` on the logo img to prevent layout shift.
- **SEO** (`index.html`): `robots`, `author`, `og:site_name`, `twitter:image:alt`, `modulepreload` for the entry script, and a minimal JSON-LD `SoftwareSourceCode` block. Canonical/`og:url` omitted (deployed origin not verifiable from repo).
- **Code quality** (`eslint.config.js`, `main.test.js`): promoted `prefer-arrow-callback`/`prefer-template` to `error`, added `no-implicit-coercion` and `no-throw-literal`; added tests for landmarks, single-h1, and non-empty logo alt.

Verified after changes: `npm run lint`, `npm run test:ci` (7/7), and `npm run build` all pass; visual diff vs baseline at three breakpoints showed only the intended heading text-shadow change with no layout regression.
