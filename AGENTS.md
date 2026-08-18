# AGENTS.md (minimal)

Entry point for AI agents in this repository. Expand over time; start here for stack, build, and git rules.

**Playbook:** [Cursor CLI playbook](https://github.com/marcop135/dotfiles/blob/main/docs/cursor-cli-playbook.md) (dotfiles) or link your org copy.

## Stack

Vite 8 + vanilla ES modules + Sass (`sass-embedded`), linted by ESLint, Stylelint, HTMLHint, and html-validate; Vitest (jsdom) for tests; Prettier for formatting; Husky + lint-staged pre-commit. Node 22 (`.nvmrc`). Single static page: `index.html` mounts `#app`, `src/assets/js/main.js` builds the DOM.

## Build / test

- `npm run dev` (port 3000), `npm run build`, `npm run preview`
- `npm run lint`, `npm run lint:fix`, `npm run format`, `npm run format:check`
- `npm run test:ci`, `npm run test:coverage`
- `npm run release:check` is the CI gate: lint, format check, tests, build, `npm run audit:prod`

## Audit policy

`release:check` blocks on **production dependencies only** (`npm audit --omit=dev --audit-level=moderate`). CI runs a full-tree `npm audit` as a separate non-blocking step so dev-toolchain advisories stay visible.

Do not re-scope `release:check` to the full tree. A dev-only advisory with no published fix would then block every PR, every scheduled npm update, and every release at once, and no single dependency PR could clear it. Clear dev advisories with `npm run audit:fix`. Reach for `overrides` in `package.json` only when no upstream fix exists, and use a caret range, never an exact pin: an exact pin at a version that later turns vulnerable cannot be lifted by `npm update`.

## Git

- Default branch on GitHub is `main`, but **all work branches from and targets `develop`**.
- `develop` is protected: PR required, `lint-and-test (22.x)` is the required status check, strict mode on (branch must be up to date). Never rename that job or its `22.x` matrix entry; the protection rule matches the check by name.
- Releases: `chore(release): X.Y.Z` merges into `develop`, the merge commit is tagged `vX.Y.Z`, `release.yml` publishes the GitHub Release from `CHANGELOG.md` via `scripts/release-notes-from-changelog.mjs`, and `scheduled-patch-release.yml` merges `develop` into `main`.
- Dependabot targets `develop` (`.github/dependabot.yml`). Its *security* PRs still land on `main`, because setting `target-branch` disables security updates for that config; `dependabot-auto-merge.yml` only listens on `develop`, so those need manual handling.
- Automation that opens PRs must pass `secrets.RELEASE_PAT`, not the default `GITHUB_TOKEN`: PRs created by `GITHUB_TOKEN` do not trigger workflows, so the required check never runs and auto-merge blocks forever.
- Conventional commit subjects, imperative mood, first line under 72 characters.
- Changelog: prepend to `CHANGELOG.md` following its own header rules (Keep a Changelog, imperative voice, one line per bullet, 120 visible characters max, **Build / Chore / CI / Docs / Enhance / Feat / Fix / Perf / Revert / Sec / Style** labels).

## Do not

- Commit secrets (`.env`, credentials).
- Force-push shared branches unless explicitly requested.
- Attribute commits or PRs to an agent: no agent co-author trailers, no generated-with footers.

## Cursor CLI

- Model: Composer 2.5 standard (`maxMode: false`).
- Headless: `agent -p --force` from repo root with this file in context.
- Long parallel audits with overlapping files: use repo `scripts/*-fanout.sh` if present.
