# Codebase Improvement Opportunities

Open items only. Items previously listed here that have since shipped (license fix, vendor splitting, Vitest, CI workflow, Husky, CONTRIBUTING/CHANGELOG, ESLint rules, audit scripts, `.env.example`) are recorded in `CHANGELOG.md`.

## Tooling

- **Accessibility linting**: add `@axe-core/cli` or `eslint-plugin-jsx-a11y` (latter only useful if JSX is added).
- **Lighthouse CI**: automated performance/accessibility budgets on PRs.

## Build / Config

- **HTMLHint semantics**: enable rules for ARIA, alt text, semantic-element usage if not covered by `html-validate`.

## Docs

- **JSDoc**: add to non-trivial functions in `src/`.
