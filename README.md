<p align="center">
  <img src="./docs/hero.png" alt="vite-vanilla-sass-lint hero" width="900" />
</p>

# Vite Vanilla JS + Sass Starter

A [Vite](https://vitejs.dev/) starter for vanilla JavaScript and Sass with linting, formatting, tests, and a tagged-release pipeline already wired up.

Use this when you want a small, framework-free static site or web app and you do not want to spend half a day configuring ESLint, Stylelint, HTMLHint, html-validate, Prettier, Vitest, Husky, and a release workflow yourself.

## Quick start

```bash
npx degit marcop135/vite-vanilla-sass-lint my-app
cd my-app
npm install
npm run dev
```

Dev server runs on `http://localhost:3000`.

## What's included

- **Build:** Vite, Dart Sass (`sass-embedded`), Autoprefixer, [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- **Quality:** [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/) + `stylelint-config-standard-scss`, [HTMLHint](https://htmlhint.com/), [html-validate](https://html-validate.org/), [Prettier](https://prettier.io/)
- **Tests:** [Vitest](https://vitest.dev/) with UI + coverage modes, `jsdom` environment
- **Vite plugins:** [`vite-plugin-html`](https://github.com/vbenjs/vite-plugin-html) (minify), [`vite-plugin-eslint2`](https://vite-plugin-eslint2.modyqyw.top/), [`vite-plugin-stylelint`](https://vite-plugin-stylelint.modyqyw.top/), [`rollup-plugin-visualizer`](https://github.com/btd/rollup-plugin-visualizer) (analyze)
- **Automation:** Husky + lint-staged pre-commit, GitHub Actions for CI, tag-driven releases, biweekly patch releases, Dependabot auto-merge for patch/minor

## Scripts

| Command                 | What it does                                                  |
| ----------------------- | ------------------------------------------------------------- |
| `npm run dev`           | Start Vite dev server                                         |
| `npm run build`         | Production build to `dist/`                                   |
| `npm run preview`       | Serve the production build locally                            |
| `npm run lint`          | ESLint + Stylelint + HTMLHint + html-validate                 |
| `npm run lint:fix`      | Same, auto-fixing what's fixable                              |
| `npm run format`        | Prettier write across `src/**` and root `index.html`          |
| `npm run format:check`  | Prettier check (no writes)                                    |
| `npm run test`          | Vitest watch                                                  |
| `npm run test:ci`       | Vitest single run                                             |
| `npm run test:ui`       | Vitest UI                                                     |
| `npm run test:coverage` | Vitest coverage report                                        |
| `npm run analyze`       | Build with bundle visualizer, opens `dist/stats.html`         |
| `npm run audit`         | `npm audit`                                                   |
| `npm run audit:fix`     | `npm audit fix`                                               |
| `npm run release:check` | Same gates as CI: lint, format, test, build, audit (moderate) |
| `npm run clean`         | Remove `dist/`                                                |

## Project layout

```
src/
  assets/
    images/   svg + raster assets imported from JS
    js/       entry: main.js, plus *.test.js
    scss/     entry: main.scss
public/         copied as-is to dist/ (favicons, OG image, site.webmanifest)
docs/           README assets (hero.png)
scripts/        release helpers (bump-patch-maintenance, release-notes-from-changelog)
index.html      Vite entry, references src/assets/js/main.js
vite.config.js  build config + bundle analyzer toggle
```

## Configuration

| File                                         | Purpose                                             |
| -------------------------------------------- | --------------------------------------------------- |
| `eslint.config.js`                           | ESLint flat config                                  |
| `.stylelintrc` + `.stylelintignore`          | Stylelint                                           |
| `.htmlhintrc`                                | HTMLHint                                            |
| `.htmlvalidate.json` + `.htmlvalidateignore` | html-validate (editor + CLI), aligned with Prettier |
| `prettier.config.mjs`                        | Prettier                                            |
| `postcss.config.js`                          | PostCSS (Autoprefixer)                              |
| `vitest.config.js`                           | Vitest                                              |
| `.browserslistrc`                            | Targets for Autoprefixer                            |
| `.editorconfig` + `.nvmrc`                   | Editor + Node version pinning                       |

Production build emits ESM only and uses `sourcemap: 'hidden'`: maps are produced for crash-reporting tooling but never referenced from the built JS. `vite build --mode development` (or `--mode analyze`) emits full inline sourcemaps for local debugging. `dist/` is build output, untracked, and not published.

## Releases

Changes land on `develop`, then a release commit (`chore(release): X.Y.Z`) merges to `develop`, the merge is tagged `vX.Y.Z`, and `main` is fast-forwarded. The `release.yml` workflow then runs `release:check` against the tag and publishes a GitHub Release whose body is built from `CHANGELOG.md` by `scripts/release-notes-from-changelog.mjs`.

A scheduled workflow (`scheduled-patch-release.yml`) runs the bump, PR, merge, tag, and `main` fast-forward biweekly on the 3rd and 17th UTC. See [`CHANGELOG.md`](./CHANGELOG.md) for the full history.

## Requirements

- [Node.js](https://nodejs.org/en) v22.14+ (pinned in `.nvmrc`, run `nvm use`)
- [degit](https://github.com/Rich-Harris/degit) (`npm install -g degit`), only to scaffold

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Bug reports and feature requests go through [issues](https://github.com/marcop135/vite-vanilla-sass-lint/issues).

## Author

[Marco Pontili](https://marcopontili.com)

## License

[MIT](./LICENSE)
