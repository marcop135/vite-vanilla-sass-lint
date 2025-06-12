# 🚀 Vite Vanilla JS & Sass Supercharged Starter

A fast, modern starter template for vanilla JavaScript and Sass, powered by [Vite](https://vitejs.dev/).  
Includes comprehensive linting, formatting, image optimization, HTML minification, and legacy browser support.  
Perfect for performant, framework-free frontend apps with strict code quality.

## ✨ Features

- ⚡️ Lightning-fast development with Vite
- 🧱 Pure Vanilla JS & Sass (no frameworks)
- 🧹 Integrated linting for HTML, CSS/SCSS, and JS
- 🖼️ Automated image optimization
- 🔧 Minified and templated HTML
- 🕸️ Legacy browser compatibility
- 🌀 Autoprefixing for cross-browser CSS

## 📦 Tech Stack

- **Build:** Vite
- **Language:** Vanilla JavaScript
- **Styles:** Dart Sass, modern-normalize
- **Linting:** ESLint, Stylelint, HTMLHint
- **Formatting:** Prettier
- **Images:** vite-plugin-imagemin
- **HTML:** vite-plugin-html
- **PostCSS:** Autoprefixer
- **Legacy:** @vitejs/plugin-legacy

## 🧪 Project Structure

- `src/` – Source files (HTML, JS, SCSS, assets)
- `dist/` – Production build output
- `index.html` – Entry HTML file
- `vite.config.js` – Vite config
- `postcss.config.js` – PostCSS config
- `eslint.config.js`, `.stylelintrc`, `.htmlhintrc` – Lint configs
- `prettier.config.mjs` – Formatting config
- `package.json` – Scripts & dependencies

## 🧩 Vite Plugins

- [`vite-plugin-html`](https://github.com/vbenjs/vite-plugin-html) – Minifies HTML + template support
- [`vite-plugin-imagemin`](https://github.com/vbenjs/vite-plugin-imagemin) – Optimizes images
- [`vite-plugin-eslint2`](https://vite-plugin-eslint2.modyqyw.top/) – Lints JS
- [`vite-plugin-stylelint`](https://vite-plugin-stylelint.modyqyw.top/) – Lints SCSS
- [`@vitejs/plugin-legacy`](https://vitejs.dev/plugins/#vitejs/plugin-legacy) – Legacy browser support

---

## ⚙️ Requirements

- [Node.js](https://nodejs.org/en) (v18+)
- [degit](https://github.com/Rich-Harris/degit) (`npm install -g degit`)

## 🚀 Getting Started

```bash
npx degit marcop135/vite-vanilla-sass-lint my-app
cd my-app
npm install
npm run dev
```

## 🧪 Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Lint html, css, scss, and js files
npm run format    # Format html, css, scss, js, and md files
```

---

## 🧹 Linting & Formatting

Includes:

- `eslint` – Lint JavaScript
- `stylelint` – Lint CSS/SCSS
- `htmlhint` – Lint HTML/JSX
- `prettier` – Format code

### 📌 Run automatically:

```bash
npm run lint
npm run format
```

### 📌 Run manually:

```bash
npx eslint "src/assets/js/*.js"
npx stylelint "src/assets/scss/*.{scss,css}"
npx htmlhint "**/*.html"
npx prettier --check "src/**/*.{js,css,scss,html,md}"
```

---

## 📚 Official Documentation

- [Vite Docs](https://vitejs.dev/guide/)
- [Sass Docs](https://sass-lang.com/)
- [Modern Normalize](https://github.com/sindresorhus/modern-normalize)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [HTMLHint](https://htmlhint.com/)
- [Stylelint](https://stylelint.io/)
- [ESLint](https://eslint.org/docs/latest/)
- Vite Plugins:
  - [`vite-plugin-html`](https://github.com/vbenjs/vite-plugin-html)
  - [`vite-plugin-imagemin`](https://github.com/vbenjs/vite-plugin-imagemin)
  - [`vite-plugin-eslint2`](https://vite-plugin-eslint2.modyqyw.top/)
  - [`vite-plugin-stylelint`](https://vite-plugin-stylelint.modyqyw.top/)
  - [`@vitejs/plugin-legacy`](https://vitejs.dev/plugins/#vitejs/plugin-legacy)

---

## 🤝 Contributing

Contributions welcome! Open issues or submit PRs.

## 👤 Author

[Marco Pontili](https://marcopontili.com)

## 📝 License

Licensed under the [MIT](./LICENSE) License.
