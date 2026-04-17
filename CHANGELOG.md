# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
