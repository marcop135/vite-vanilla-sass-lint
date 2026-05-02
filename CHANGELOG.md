# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.7.0] - 2026-05-02

### Added

- Dependabot auto-merge workflow that enables squash auto-merge for patch and minor updates after CI passes; major updates remain manual.
- Scheduled biweekly `npm update` workflow that runs on the 1st and 15th of each month (plus `workflow_dispatch`), verifies via `release:check`, and opens a PR with the lockfile diff.

### Changed

- Dependabot npm and github-actions updates now target `develop` instead of `master`, treating `develop` as the integration branch where bumps soak before promoting to `master`.
- CI now runs on `develop` push and pull_request in addition to `master` and `main`.

### Fixed

- Reconciled `package.json` version with `CHANGELOG.md` after two release entries did not bump `package.json`.

## [1.7.0] - 2026-05-02

### Added

- Dependabot auto-merge workflow that enables squash auto-merge for patch and minor updates after CI passes; major updates remain manual.
- Scheduled biweekly `npm update` workflow that runs on the 1st and 15th of each month (plus `workflow_dispatch`), verifies via `release:check`, and opens a PR with the lockfile diff.

### Changed

- Dependabot npm and github-actions updates now target `develop` instead of `master`, treating `develop` as the integration branch where bumps soak before promoting to `master`.
- CI now runs on `develop` push and pull_request in addition to `master` and `main`.

### Fixed

- Reconciled `package.json` version with `CHANGELOG.md` after two release entries did not bump `package.json`.

## [1.6.2] - 2026-04-28

### Changed

- Updated GitHub Actions dependencies:
  - `actions/setup-node` from 4.4.0 to 6.4.0
  - `actions/checkout` from 4.3.1 to 6.0.2
  - `softprops/action-gh-release` from 2.6.2 to 3.0.0
- Updated core and tooling dev dependencies:
  - `@vitejs/plugin-legacy` from 7.2.1 to 8.0.1
  - `vite` from 7.3.2 to 8.0.10
  - `vitest` from 4.1.4 to 4.1.5
  - `eslint` from 10.2.0 to 10.2.1
  - `jsdom` from 29.0.2 to 29.1.0
  - `postcss` from 8.5.10 to 8.5.12
  - `stylelint` from 17.8.0 to 17.9.1
  - `terser` from 5.46.1 to 5.46.2
  - `lint-staged` from 15.5.2 to 16.4.0

## [1.6.0] - 2026-04-17

### Added

- Added a tag-driven GitHub Actions release workflow that validates `lint`, `test`, `build`, and `audit` before publishing a GitHub release.
- Added a `release:check` npm script to run the full release validation pipeline locally or in CI.

### Changed

- Upgraded the Vitest stack to v4 (`vitest`, `@vitest/ui`, `@vitest/coverage-v8`) and updated `jsdom` to match.
- Removed `vite-plugin-imagemin` to eliminate legacy transitive vulnerabilities in the dependency tree.

## [1.5.3] - 2026-04-17

### Changed

- Refreshed installed dependencies and lockfile integrity with `npm install`.
- Updated npm packages to the latest versions allowed by existing semver ranges with `npm update`.

## [1.5.2] - 2026-04-17

### Changed

- Refreshed the dependency lockfile with `npm install`.
- Updated npm packages to the latest versions allowed by existing semver ranges with `npm update`.

### Added

- Testing infrastructure with Vitest
- Pre-commit hooks with Husky and lint-staged
- CI/CD pipeline with GitHub Actions
- Additional npm scripts (`lint:fix`, `format:check`, `clean`, `audit`, `audit:fix`, `test`, `test:ui`, `test:coverage`)
- CONTRIBUTING.md with contribution guidelines
- `.env.example` file for environment variables
- Enhanced ESLint rules (`no-var`, `prefer-const`, `prefer-arrow-callback`, `prefer-template`)
- Test coverage configuration
- GitHub Actions workflow for automated testing and linting

### Fixed

- License mismatch: Updated `package.json` license from "ISC" to "MIT" to match LICENSE file
- Node version inconsistency: Updated README to reflect Node.js v22.14+ requirement
- Empty vendor chunk configuration: Implemented proper vendor code splitting in `vite.config.js`
- Git ignore: Uncommented `dist` folder in `.gitignore`

### Changed

- Updated README with new features, scripts, and testing information
- Enhanced `.gitignore` to include test coverage and Husky directories
- Improved vendor chunk splitting logic in Vite config

### Documentation

- Added comprehensive CONTRIBUTING.md
- Updated README with testing section
- Added documentation for new scripts and features
- Added note about `.nvmrc` usage in README

## [1.4.0] - Previous Release

Initial stable release with:

- Vite build configuration
- ESLint, Stylelint, and HTMLHint linting
- Prettier formatting
- Image optimization
- Legacy browser support
- Modern-normalize CSS reset
