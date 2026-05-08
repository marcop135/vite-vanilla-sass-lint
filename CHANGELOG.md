# Changelog

**Labels:** **Build**, **Chore**, **CI**, **Docs**, **Enhance**, **Feat**, **Fix**, **Perf**, **Revert**, **Sec**, **Style**; add **(WIP)** for incomplete work.

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
