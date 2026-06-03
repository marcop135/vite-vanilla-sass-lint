# Changelog

**Format:** Based on [Keep a Changelog](https://keepachangelog.com).

**Voice:** Use the imperative, like a commit message. Write add, fix, increase, force, not added, fixed, increased, forced.

**Length:** Keep each bullet on one line, max 120 characters (link URLs do not count toward the cap, only the visible text does).

**Links:** Add inline markdown links for related PRs, docs, and external references when they help the reader.

**Labels:** **Build**, **Chore**, **CI**, **Docs**, **Enhance**, **Feat**, **Fix**, **Perf**, **Revert**, **Sec**, **Style**; append **(WIP)** only for incomplete work.

## [1.9.6] - 2026-06-03

### Changed

- Automated biweekly maintenance patch: semver patch bump after `release:check`, commit on `develop`, tag; GitHub Release follows the tag; Netlify deploy uses whichever branch you configured (often `develop`).

## [1.9.5] - 2026-06-03

- **Build:** Bump vite 8.0.13 to 8.0.16 ([#57](https://github.com/marcop135/vite-vanilla-sass-lint/pull/57)), vitest 4.1.6 to 4.1.8 ([#56](https://github.com/marcop135/vite-vanilla-sass-lint/pull/56)), eslint 10.3.0 to 10.4.1 ([#65](https://github.com/marcop135/vite-vanilla-sass-lint/pull/65)).
- **Build:** Bump stylelint 17.11.1 to 17.12.0 ([#62](https://github.com/marcop135/vite-vanilla-sass-lint/pull/62)), terser 5.47.1 to 5.48.0 ([#61](https://github.com/marcop135/vite-vanilla-sass-lint/pull/61)), sass-embedded 1.99.0 to 1.100.0 ([#60](https://github.com/marcop135/vite-vanilla-sass-lint/pull/60)).

## [1.9.4] - 2026-06-02

- **Sec:** Bump `brace-expansion` to clear a moderate npm audit advisory.
- **Chore:** Replace tautological `main.js` test assertions with real DOM-output checks.

## [1.9.3] - 2026-05-17

- **Build:** Bump vite 8.0.11 to 8.0.13 ([#48](https://github.com/marcop135/vite-vanilla-sass-lint/pull/48)), vitest 4.1.5 to 4.1.6 ([#49](https://github.com/marcop135/vite-vanilla-sass-lint/pull/49)), stylelint 17.11.0 to 17.11.1 ([#53](https://github.com/marcop135/vite-vanilla-sass-lint/pull/53)).

## [1.9.2] - 2026-05-12

- **Docs:** Trim `CONTRIBUTING.md`: drop duplicated PR checklist and issue/feature sections now covered by templates; drop stale `.env.example` reference; condense code-quality gates to `release:check`.
- **Docs:** Add `SECURITY.md`, PR template, and bug/feature issue templates under `.github/`.
- **Build:** Add `.prettierignore` (`dist/`, `coverage/`, `node_modules/`, `.husky/_`, `package-lock.json`, `CHANGELOG.md`).
- **Docs:** Add JSDoc `@param`/`@returns`/`@throws` to helpers in `scripts/release-notes-from-changelog.mjs` and `scripts/bump-patch-maintenance.mjs`.
- **Style:** Drop redundant `console.error` before `throw` in `src/assets/js/main.js`.
- **Docs:** Refresh `IMPROVEMENTS.md` (close shipped items, add cssnano and strict audit gate).

## [1.9.1] - 2026-05-12

- **Docs:** Rewrite README to lead with quick start; drop duplicated tech stack, manual lint block, and config restatements; consolidate scripts and config pointers into tables.
- **Docs:** Move README hero asset to `docs/hero.png` so consumers can delete the OG card without breaking the README.
- **Sec:** Tighten `index.html` CSP `script-src` to `'self'` now that `@vitejs/plugin-legacy` is gone and no inline scripts are emitted.
- **Build:** `vite.config.js` switches to function form: `sourcemap` is `'hidden'` in production, `true` otherwise; add `rollup-plugin-visualizer` wired to `npm run analyze` (`vite build --mode analyze`).
- **Docs:** Trim `CONTRIBUTING.md` scripts block to a single link back to README.

## [1.9.0] - 2026-05-10

- **Sec:** Drop `@vitejs/plugin-legacy`; eliminates `data:text/javascript` runtime scripts that required loosening `script-src` CSP. Build now emits modern ESM only.
- **Build:** Remove legacy plugin import and config from `vite.config.js`; remove `@vitejs/plugin-legacy` from `devDependencies`.
- **Docs:** README hero uses `public/og.png` (reliable GitHub rendering); drop legacy-browser claims and `@vitejs/plugin-legacy` references.

## [1.8.2] - 2026-05-08

- **Build:** Bump html-validate 10.9.0 to 10.15.0, vite 8.0.10 to 8.0.11, terser 5.46.2 to 5.47.1, stylelint 17.9.1 to 17.11.0.
- **Docs:** Drop emoji from README hero heading; align hero alt text and `index.html` title to comma style.
- **Chore:** Gitignore `.netlify/` (Netlify CLI local state, machine-specific paths).

## [1.8.1] - 2026-05-08

- **Sec:** Override `fast-uri` to `^3.1.2` to clear GHSA-q3j6-qgpj-74h6 and GHSA-v39h-62p7-jpjc; `release:check` audit now passes.
- **Docs:** Trim CHANGELOG entries to terse one-liners.
- **Docs:** Realign `CONTRIBUTING.md` to branch from `develop` and reference `.env.example`.
- **Docs:** Replace stale `IMPROVEMENTS.md` with current open items only.

## [1.8.0] - 2026-05-08

- **Enhance:** Add Open Graph and Twitter Card meta tags.
- **Style:** Add 1200x630 social image at `public/og.{svg,png}`.
- **Docs:** Add README hero from `public/og.svg`.
- **CI:** Tag releases publish bullet summaries.

## [1.7.4] - 2026-05-08

- **Chore:** Biweekly automated patch release.

## [1.7.3] - 2026-05-03

- **Chore:** Biweekly automated patch release.

## [1.7.2] - 2026-05-02

- **Enhance:** Include root `index.html` in Prettier globs.
- **Build:** Add `html-validate` to `npm run lint`.
- **Style:** Add `.htmlvalidate.json` aligned to Prettier.
- **Docs:** Drop stale `imagemin` claims.

## [1.7.1] - 2026-05-02

- **CI:** Add scheduled patch release workflow (cron 3rd/17th UTC).

## [1.7.0] - 2026-05-02

- **Enhance:** Biweekly `npm update` PRs after `release:check`.
- **Fix:** Reconcile `package.json` version with `CHANGELOG.md`.
- **CI:** Run on `develop` in addition to `master`/`main`.
- **CI:** Auto-merge Dependabot patch/minor updates.
- **Chore:** Point Dependabot at `develop`.

## [1.6.2] - 2026-04-28

- **Build:** Bump Vite 7→8, plugin-legacy 7→8, Vitest 4.1.5, ESLint 10.2.1, jsdom 29.1.0, and minor deps.
- **CI:** Bump `setup-node` 4→6, `checkout` 4→6, `action-gh-release` 2→3.

## [1.6.1] - 2026-04-28

- **Sec:** Tighten frontend security defaults (#14).
- **CI:** Harden release workflow and CI config (#13).

## [1.6.0] - 2026-04-17

- **Feat:** Add `release:check` script (lint, format, test, build, audit).
- **Build:** Upgrade Vitest stack to v4 and bump `jsdom`.
- **Build:** Drop `vite-plugin-imagemin`.
- **CI:** Add tag-driven release workflow.

## [1.5.3] - 2026-04-17

- **Chore:** Refresh `package-lock.json` within semver ranges.

## [1.5.2] - 2026-04-17

- **Feat:** Add Vitest with coverage, watch, and UI scripts.
- **Enhance:** Tighten ESLint (`no-var`, `prefer-const`, `prefer-arrow-callback`, `prefer-template`).
- **Enhance:** Add `lint:fix`, `format:check`, `clean`, `audit`, `audit:fix`, `test:ui`, `test:coverage`.
- **Fix:** Vendor code splitting in `vite.config.js`.
- **Fix:** Correct license `ISC`→`MIT`.
- **Build:** Add Husky + lint-staged and GitHub Actions CI.
- **Docs:** Add `CONTRIBUTING.md`, `.env.example`, README testing section, Node v22.14+ note.
- **Chore:** Ignore `dist/`, coverage, and Husky dirs.

## [1.5.1] - 2026-04-17

- **Chore:** Patch maintenance on `master`.

## [1.4.0]

- **Feat:** Initial stable release with Vite, ESLint/Stylelint/HTMLHint, Prettier, image optimization, legacy support, modern-normalize.
