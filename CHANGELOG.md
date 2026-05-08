# Changelog

**Labels:** **Build**, **Chore**, **CI**, **Docs**, **Enhance**, **Feat**, **Fix**, **Perf**, **Revert**, **Sec**, **Style**; add **(WIP)** for incomplete work.

## [1.8.0] - 2026-05-08

- **Enhance:** Add Open Graph and Twitter Card meta tags pointing at `/og.png` with type, dimensions, and `summary_large_image`.
- **Style:** Add 1200x630 social/hero image at `public/og.svg` plus rasterized `public/og.png` using the Netlify gradient palette.
- **Docs:** Add README hero rendered from `public/og.svg` so the repo opens with a visual.
- **CI:** Tag releases publish short bullet summaries instead of automated commit listings.

## [1.7.4] - 2026-05-08

- **Chore:** Automated biweekly maintenance patch: `release:check`, semver patch bump on `develop`, tag, and GitHub Release publish.

## [1.7.3] - 2026-05-03

- **Chore:** Automated biweekly maintenance patch: `release:check`, semver patch bump on `develop`, tag, and GitHub Release publish.

## [1.7.2] - 2026-05-02

- **Enhance:** Prettier `format` / `format:check` / `release:check` globs now include root `index.html` to match CI and the Vite entry.
- **Build:** Add `html-validate` and run it after HTMLHint in `npm run lint`, with `.htmlvalidateignore` covering `dist/` and `node_modules/`.
- **Style:** Add `.htmlvalidate.json` aligned to Prettier doctype and void-element style and recommend the `vscode-html-validate` extension.
- **Docs:** Refresh README and `package.json` description to drop stale `imagemin` claims.

## [1.7.1] - 2026-05-02

- **CI:** Add scheduled patch release workflow (cron 3rd/17th UTC) running `release:check`, bumping semver, pushing `develop`, and tagging `v*`.

## [1.7.0] - 2026-05-02

- **Enhance:** Open `npm update` PRs biweekly (1st/15th) after `release:check` so lockfile bumps soak on `develop`.
- **Fix:** Reconcile `package.json` version with `CHANGELOG.md` after two release entries skipped the `package.json` bump.
- **CI:** Run on `develop` push and pull_request in addition to `master` and `main`.
- **CI:** Auto-merge Dependabot patch and minor updates after CI passes; majors stay manual.
- **Chore:** Point Dependabot npm and github-actions updates at `develop` as the integration branch.

## [1.6.2] - 2026-04-28

- **Build:** Bump Vite 7 to 8, `@vitejs/plugin-legacy` 7 to 8, Vitest 4.1.5, ESLint 10.2.1, jsdom 29.1.0, plus stylelint, postcss, terser, lint-staged.
- **CI:** Bump GitHub Actions: `setup-node` 4 to 6, `checkout` 4 to 6, and `softprops/action-gh-release` 2 to 3.

## [1.6.1] - 2026-04-28

- **Sec:** Tighten frontend security defaults and repository hygiene (#14).
- **CI:** Harden the release workflow and CI configuration (#13).

## [1.6.0] - 2026-04-17

- **Feat:** Add `release:check` npm script chaining lint, format check, tests, build, and `npm audit` for local and CI runs.
- **Build:** Upgrade Vitest stack to v4 (`vitest`, `@vitest/ui`, `@vitest/coverage-v8`) and bump `jsdom` to match.
- **Build:** Drop `vite-plugin-imagemin` to eliminate legacy transitive vulnerabilities in the dependency tree.
- **CI:** Add tag-driven GitHub Actions release workflow that runs `lint`, `test`, `build`, and `audit` before publishing.

## [1.5.3] - 2026-04-17

- **Chore:** Refresh `package-lock.json` and bump packages to the latest versions allowed by existing semver ranges.

## [1.5.2] - 2026-04-17

- **Feat:** Add Vitest with coverage, watch, and UI scripts for unit and integration tests.
- **Enhance:** Tighten ESLint with `no-var`, `prefer-const`, `prefer-arrow-callback`, and `prefer-template`.
- **Enhance:** Add npm scripts `lint:fix`, `format:check`, `clean`, `audit`, `audit:fix`, `test:ui`, and `test:coverage`.
- **Fix:** Implement proper vendor code splitting in `vite.config.js` so the vendor chunk is no longer empty.
- **Fix:** Correct `package.json` license from `ISC` to `MIT` to match the `LICENSE` file.
- **Build:** Add Husky pre-commit hooks with `lint-staged` and a GitHub Actions CI workflow for tests and linting.
- **Docs:** Add `CONTRIBUTING.md`, `.env.example`, a README testing section, and the Node.js v22.14+ requirement note.
- **Chore:** Ignore `dist/`, test coverage output, and Husky directories in `.gitignore`.

## [1.5.1] - 2026-04-17

- **Chore:** Patch maintenance on `master` for repository housekeeping.

## [1.4.0]

- **Feat:** Initial stable release with Vite build, ESLint/Stylelint/HTMLHint linting, Prettier formatting, image optimization, legacy browser support, and modern-normalize.
