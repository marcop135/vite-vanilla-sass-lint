---
name: perf-audit
description: Run a full performance/accessibility/SEO/code-quality optimization pass on this Vite site. Captures baseline screenshots, fixes issues via parallel agents, verifies lint/tests/build, then re-screenshots at desktop/tablet/mobile and diffs against the baseline to catch visual regressions. Use when asked to "optimize the repo", "run the audit", "improve performance/a11y/SEO", or "do the optimization workflow".
---

# Performance / Accessibility / SEO / Code-quality audit

Reusable workflow for this repo. Execute the phases in order. Track them with TaskCreate.

## Phase 0 — Setup screenshot tooling

Playwright is not a project dependency; install it (plus diff libs) in a temp dir so the repo stays clean. The repo's `scripts/screenshot.mjs` and `scripts/compare-screenshots.mjs` import the packages by bare name, so run them FROM the temp dir with an absolute output path into the repo.

```bash
mkdir -p /tmp/pw-shot && cd /tmp/pw-shot \
  && npm install playwright pixelmatch pngjs >/dev/null 2>&1 \
  && cp "$REPO/scripts/screenshot.mjs" "$REPO/scripts/compare-screenshots.mjs" .
```

`screenshot.mjs` launches the system Chrome via `channel: 'chrome'` (no browser download) and freezes CSS animation so frames are comparable. Breakpoints: desktop 1280x800, tablet 768x1024, mobile 375x667.

## Phase 1 — Baseline

Start the dev server, then capture the baseline:

```bash
npm run dev > /tmp/vite-dev.log 2>&1 &   # wait for http://localhost:3000 to return 200
cd /tmp/pw-shot && node screenshot.mjs "$REPO/.audit-screenshots/baseline"
```

Read the PNGs to confirm they rendered before continuing. `.audit-screenshots/` is gitignored.

## Phase 2 — Parallel audit + fix agents

Launch four agents in ONE message (parallel) with DISJOINT file ownership so concurrent edits cannot collide. This file split is what makes parallelism safe; do not let two agents touch the same file.

- **Performance/build** — owns `vite.config.js`, `postcss.config.js`, `.browserslistrc`. Build target, CSS minify/split, asset inlining, browserslist. Must keep `npm run build` green.
- **Accessibility** — owns `src/assets/js/main.js`, `src/assets/scss/main.scss`. `prefers-reduced-motion`, `:focus-visible`, contrast, image dimensions to prevent layout shift. MUST preserve the DOM contract the tests assert (see below).
- **SEO** — owns `index.html` only. Head meta, robots, canonical/og (only with a verifiable origin), JSON-LD, modulepreload. Keep htmlhint/html-validate clean.
- **Code quality** — owns lint/test configs (`eslint.config.js`, `.stylelintrc`, `.htmlhintrc`, `.htmlvalidate.json`, `vitest.config.js`, `prettier.config.mjs`) and `src/assets/js/main.test.js`. May ADD tests; must not change existing assertions.

Tell every agent: the dev server is already running (do not start/stop it); match existing code style (ESM, single quotes, semicolons, 2-space, Prettier); add no new npm dependencies; run only the linters relevant to their own files; return a report under 250 words.

**DOM contract** (the a11y and code-quality agents must both respect, from `main.test.js`):

- `#app .wrapper` exists; `.wrapper main h1` text is exactly `Vite + Sass, No Fuss`
- `.wrapper main img.logo` alt is exactly `Vite logo`
- `.wrapper footer small a` href `https://github.com/marcop135/vite-vanilla-sass-lint`, text `vite-vanilla-sass-lint`, and the `<small>` contains `This project uses the`

## Phase 3 — Verify

Review `git diff` yourself, then run all gates:

```bash
npm run lint && npm run test:ci && npm run build
```

Fix anything red before proceeding.

## Phase 4 — After screenshots + visual regression

```bash
cd /tmp/pw-shot && node screenshot.mjs "$REPO/.audit-screenshots/after"
node compare-screenshots.mjs "$REPO/.audit-screenshots/baseline" "$REPO/.audit-screenshots/after" "$REPO/.audit-screenshots"
```

The compare script writes `diff-<breakpoint>.png` and exits non-zero if any breakpoint differs by >2% or changes dimensions. Read the `after` and `diff` PNGs and confirm every difference is intentional (e.g. a contrast tweak), not a layout break.

## Phase 5 — Document

Update the "Optimization pass" section of `CLAUDE.md` with the date and what changed per category, plus the verification result.
