<p align="center">
  <img src="./public/og.png" alt="Vite Vanilla JS + Sass, No-Fuss Starter, vite-vanilla-sass-lint" width="900" />
</p>

# Vite Vanilla JS + Sass, No-Fuss Starter

A fast, modern starter template for vanilla JavaScript and Sass, powered by [Vite](https://vitejs.dev/).
Includes comprehensive linting, formatting, HTML minification, and a production-ready Vite build pipeline.
Perfect for performant, framework-free frontend apps with strict code quality.

## ✨ Features

- ⚡️ Lightning-fast development with Vite
- 🧱 Pure Vanilla JS & Sass (no frameworks)
- 🧹 Integrated linting for HTML, CSS/SCSS, and JS
- 📦 Production static assets hashed and emitted by Vite
- 🔧 Minified and templated HTML
- 🌀 Autoprefixing for cross-browser CSS
- 🧪 Testing with Vitest
- 🔒 Pre-commit hooks with Husky & lint-staged
- 🚀 CI/CD pipeline with GitHub Actions

## 📦 Tech Stack

- **Build:** Vite
- **Language:** Vanilla JavaScript
- **Styles:** Dart Sass, modern-normalize
- **Linting:** ESLint, Stylelint, HTMLHint, [html-validate](https://html-validate.org/)
- **Formatting:** Prettier
- **Testing:** Vitest
- **Git Hooks:** Husky, lint-staged
- **CI/CD:** GitHub Actions
- **Assets:** Vite static pipeline (referenced files get hashed filenames in `dist/`)
- **HTML:** vite-plugin-html
- **PostCSS:** Autoprefixer

## 🧪 Project Structure

- `src/` – Source files (HTML, JS, SCSS, assets)
- `dist/` – Production build output
- `index.html` – Entry HTML file
- `vite.config.js` – Vite config
- `postcss.config.js` – PostCSS config
- `eslint.config.js`, `.stylelintrc`, `.htmlhintrc` – Lint configs (CLI)
- `.htmlvalidate.json`, `.htmlvalidateignore` – [html-validate](https://html-validate.org/) config for editors and `npm run lint` (aligned with Prettier; ignores `dist/` / `node_modules`)
- `prettier.config.mjs` – Formatting config
- `package.json` – Scripts & dependencies
- `.vscode/` – VSCode workspace settings and recommended extensions

## 🌐 Browser Support

This starter targets modern evergreen browsers via Vite's default ESM build:

- **Modern browsers:** Latest versions of Chrome, Firefox, Safari, Edge

## 🧩 Vite Plugins

- [`vite-plugin-html`](https://github.com/vbenjs/vite-plugin-html) – Minifies HTML + template support
- [`vite-plugin-eslint2`](https://vite-plugin-eslint2.modyqyw.top/) – Lints JS
- [`vite-plugin-stylelint`](https://vite-plugin-stylelint.modyqyw.top/) – Lints SCSS

---

## ⚙️ Requirements

- [Node.js](https://nodejs.org/en) (v22.14+)
- [degit](https://github.com/Rich-Harris/degit) (`npm install -g degit`)

> **Note:** The project uses `.nvmrc` to specify the Node.js version. If you use `nvm`, run `nvm use` to automatically switch to the correct version.

## 🚀 Getting Started

```bash
npx degit marcop135/vite-vanilla-sass-lint my-app
cd my-app
npm install
npm run dev
```

## 🧪 Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint html, css, scss, and js files
npm run lint:fix     # Lint and auto-fix issues
npm run format       # Format src + root index.html (js, css, scss, html, md)
npm run format:check # Check code formatting
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage
npm run clean        # Remove dist folder
npm run audit          # Check for security vulnerabilities
npm run audit:fix      # Fix security vulnerabilities
npm run release:check  # Same gates as CI: lint, format, test, build, audit
```

---

## 🔐 Deployment Notes

- `dist/` is build output only and must stay untracked in git.
- Production builds use `sourcemap: 'hidden'` in `vite.config.js`: source maps are generated but not referenced in built JS.
- If deploying from artifacts, avoid publishing `.map` files unless you explicitly want source-level debugging in production.

---

## 🧹 Linting & Formatting

Includes:

- `eslint` – Lint JavaScript (configured in `eslint.config.js`)
- `stylelint` – Lint CSS/SCSS (configured in `.stylelintrc`)
- `htmlhint` – Lint HTML (configured in `.htmlhintrc`)
- `html-validate` – Additional HTML validation in `npm run lint` (configured in `.htmlvalidate.json`)
- `prettier` – Format code (configured in `prettier.config.mjs`)

### Configuration Highlights

**ESLint (`eslint.config.js`):**

- Enforces strict equality (`===`)
- Warns on camelCase violations
- Errors on undefined variables and unused vars
- Browser globals enabled

**Stylelint (`.stylelintrc`):**

- Extends `stylelint-config-standard-scss`
- Validates SCSS syntax and best practices
- Custom rules for project flexibility

**HTMLHint (`.htmlhintrc`):**

- Enforces lowercase tags and attributes
- Requires double quotes for attributes
- Validates unique IDs and required attributes

### 📌 Run automatically:

```bash
npm run lint
npm run format
```

### 📌 Run manually:

```bash
npx eslint "src/assets/js/**/*.js"
npx stylelint "src/assets/**/*.{css,scss}"
npx htmlhint "**/*.html"
npx prettier --check "src/**/*.{js,css,scss,html,md}" index.html
```

---

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) for testing.

### Running Tests

```bash
npm run test         # Run tests in watch mode
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage report
```

### Writing Tests

- Test files should be named `*.test.js` or `*.spec.js`
- Place test files next to the code they test or in a `__tests__` directory
- Use Vitest's API: `describe`, `it`, `expect`, etc.

Example test:

```javascript
import { describe, it, expect } from 'vitest';

describe('My Feature', () => {
  it('should do something', () => {
    expect(true).toBe(true);
  });
});
```

---

## 📚 Official Documentation

- [Vite Docs](https://vitejs.dev/guide/)
- [Sass Docs](https://sass-lang.com/)
- [Modern Normalize](https://github.com/sindresorhus/modern-normalize)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [HTMLHint](https://htmlhint.com/)
- [html-validate](https://html-validate.org/)
- [Stylelint](https://stylelint.io/)
- [ESLint](https://eslint.org/docs/latest/)
- [Vitest](https://vitest.dev/)
- [Husky](https://typicode.github.io/husky/)
- Vite Plugins:
  - [`vite-plugin-html`](https://github.com/vbenjs/vite-plugin-html)
  - [`vite-plugin-eslint2`](https://vite-plugin-eslint2.modyqyw.top/)
  - [`vite-plugin-stylelint`](https://vite-plugin-stylelint.modyqyw.top/)

---

## 🤝 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute.

- 🐛 Found a bug? [Open an issue](https://github.com/marcop135/vite-vanilla-sass-lint/issues)
- 💡 Have a feature request? [Open an issue](https://github.com/marcop135/vite-vanilla-sass-lint/issues)
- 📝 Want to contribute? [Read the contributing guide](./CONTRIBUTING.md)

## 👤 Author

[Marco Pontili](https://marcopontili.com)

## 📝 License

Licensed under the [MIT](./LICENSE) License.
