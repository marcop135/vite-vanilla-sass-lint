# Contributing

## Getting started

1. Fork and clone the repo.
2. `npm install`.
3. Branch from `develop`: `git checkout -b feature/your-feature develop`.

See [README.md](./README.md#quick-start) for the Quick start path.

## Prerequisites

- Node.js v22.14+ (pinned in `.nvmrc`; `nvm use`).
- npm (bundled with Node).

## Workflow

Before opening a PR, run `npm run release:check`. It runs the same gates as CI: lint, format check, test, build, and `npm run audit:prod` (`npm audit --omit=dev` at the moderate threshold).

The gate is scoped to production dependencies on purpose. CI still prints a full-tree `npm audit` as a non-blocking step, so dev-toolchain advisories stay visible; clear them with `npm run audit:fix` rather than letting them block a release.

Pre-commit hooks (Husky + lint-staged) run ESLint, Stylelint, and Prettier on staged files. If they fail, fix the reported issues and commit again.

## Code style

- **JavaScript:** ES2020+. Strict equality (`===`). Single quotes. camelCase. JSDoc on non-trivial functions. Rules live in `eslint.config.js`.
- **SCSS:** use variables, mixins, and shallow nesting. Rules live in `.stylelintrc`.
- **HTML:** semantic elements, lowercase tags and attributes, double-quoted attribute values, alt text on images. Rules live in `.htmlhintrc` and `.htmlvalidate.json`.

## Commit messages

Imperative mood, first line under 72 characters, optional body for the why. Example: `fix(build): keep sourcemaps referenced in dev`.

## Pull requests

Branch from `develop`. The repository has a PR template with the checklist. Issues use the bug and feature templates under `.github/ISSUE_TEMPLATE/`.

## License

By contributing you agree that your contributions are licensed under the [MIT License](./LICENSE).
