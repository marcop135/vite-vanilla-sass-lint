# Codebase Improvement Opportunities

Open items only. Items previously listed here that have since shipped (license fix, vendor splitting, Vitest, CI workflow, Husky, CONTRIBUTING/CHANGELOG, ESLint rules, audit scripts, source map conditional, bundle visualizer, JSDoc on `scripts/*.mjs`) are recorded in `CHANGELOG.md`.

## Tooling

- **Accessibility linting**: add `@axe-core/cli` run against `npm run preview` in CI, or rely on Lighthouse CI's accessibility category.
- **Lighthouse CI**: automated performance/accessibility budgets on PRs (`@lhci/cli` + `lighthouserc.json` + a workflow that runs against `dist/` after build).
- **CSS minification**: PostCSS only runs Autoprefixer; consider `cssnano` for smaller production CSS.

## Build / Config

- **Dev-advisory triage**: `release:check` now gates on production deps only, with a non-blocking full-tree audit in CI. Consider failing the advisory step when a dev advisory is high/critical *and* a fixed version exists, so genuinely actionable ones are not ignored.
- **HTMLHint semantics**: enable rules for ARIA, alt text, semantic-element usage if not covered by `html-validate:recommended`.
