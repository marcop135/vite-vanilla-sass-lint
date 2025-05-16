# 🚀 Vite Vanilla JS & Sass Supercharged Starter

A fast, modern template for vanilla JavaScript and Sass, powered by [Vite](https://vitejs.dev/). A fast setup with comprehensive linting with ESLint, Stylelint, and HTMLHint. It uses modern-normalize, minifies HTML, optimizes images, and showcases a streamlined, framework-free approach to frontend development. Enjoy optimized performance, strict code quality, and robust legacy browser support.

## ✨ Features

- ⚡️ Lightning-fast development with Vite
- 🧼 Built-in linting for HTML, JavaScript, and SCSS using ESLint, Stylelint, and HTMLHint
- 🖼️ Automatic image optimization
- 🧱 Zero frameworks: Pure Vanilla JavaScript and Sass
- 🔧 Minified, customizable HTML templates via `vite-plugin-html`
- 🕸️ Legacy browser compatibility with `@vitejs/plugin-legacy`
- 🌀 Automatic CSS vendor prefixing with [Autoprefixer](https://github.com/postcss/autoprefixer)

## 📦 Tech Stack

- **Build tool:** [Vite](https://vitejs.dev/)
- **JavaScript:** Vanilla JS
- **Preprocessor:** [Sass Embedded](https://sass-lang.com/dart-sass/)
- **CSS reset:** [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- **Linting:** [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), [HTMLHint](https://htmlhint.com/) — ensuring consistent, high-quality code
- **Image compression:** [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin)
- **HTML minification/templates:** [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html)
- **PostCSS:** [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Legacy support:** [@vitejs/plugin-legacy](https://vitejs.dev/plugins/#vitejs/plugin-legacy)

## 🧪 Project Structure

- `src/` – Main source files (HTML, JS, SCSS, assets)
- `dist/` – Production build output (generated)
- `index.html` – Entry HTML file with plugin support
- `vite.config.js` – Custom Vite configuration with plugins and aliases
- `postcss.config.js` – PostCSS configuration (Autoprefixer, etc.)
- `.eslintrc`, `.stylelintrc`, `.htmlhintrc` – Dedicated linting configurations for maximum code quality
- `package.json` – Project dependencies and scripts

## 🧩 Vite Plugins

- **[vite-plugin-html](https://github.com/vbenjs/vite-plugin-html):**
  Compresses HTML, supports EJS-like templating, and enables multi-page apps.
- **[vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin):**
  Optimizes images (JPEG, PNG, SVG, etc.) during build.
- **[vite-plugin-eslint2](https://vite-plugin-eslint2.modyqyw.top/):**
  Enforces JavaScript linting during development and build with ESLint.
- **[vite-plugin-stylelint](https://vite-plugin-stylelint.modyqyw.top/):**
  Applies Stylelint checks to SCSS/CSS for consistent, high-quality styles.
- **[@vitejs/plugin-legacy](https://vitejs.dev/plugins/#vitejs/plugin-legacy):**
  Ensures compatibility with older browsers by generating legacy bundles.

---

## 🚀 Getting Started

### Requirements

Node.js ≥ 18.x

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
# → Starts the local dev server at http://localhost:3000
```

### Production

```bash
npm run build
# → Builds the static site into dist/

npm run preview
# → Serves the production build locally for testing
```

---

## 🧹 Linting

Lint your code manually using the following CLI commands:

- **ESLint (JavaScript):**
  ```bash
  npx eslint src/
  ```
- **Stylelint (SCSS/CSS):**
  ```bash
  npx stylelint "src/**/*.scss"
  ```
- **HTMLHint (HTML):**
  ```bash
  npx htmlhint "src/**/*.html"
  ```

You can also configure these as npm scripts in your `package.json` for convenience.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this template.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 👤 Author

Created with passion by [Marco Pontili](https://marcopontili.com) - [GitHub](https://github.com/marcop135).
