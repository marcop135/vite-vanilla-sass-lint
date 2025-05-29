# 🚀 Vite Vanilla JS & Sass Supercharged Starter

A fast, modern starter template for vanilla JavaScript and Sass, powered by [Vite](https://vitejs.dev/).  
Includes comprehensive linting (ESLint, Stylelint, HTMLHint), image optimization, HTML minification, and legacy browser support.  
Perfect for building performant, framework-free frontend apps with strict code quality.

## ✨ Features

* ⚡️ Lightning-fast development with Vite
* 🧱 No frameworks: Pure Vanilla JS & Sass
* 🧹 Integrated linting for HTML, CSS/SCSS, and JS
* 🖼️ Automated image optimization
* 🔧 Minified and templated HTML
* 🕸️ Legacy browser compatibility
* 🌀 Autoprefixing for cross-browser CSS

## 📦 Tech Stack

* **Build:** Vite  
* **Language:** Vanilla JavaScript  
* **Styles:** Dart Sass, modern-normalize  
* **Linting:** ESLint, Stylelint, HTMLHint  
* **Images:** vite-plugin-imagemin  
* **HTML:** vite-plugin-html  
* **PostCSS:** Autoprefixer  
* **Legacy:** @vitejs/plugin-legacy  

## 🧪 Project Structure

* `src/` – Source files (HTML, JS, SCSS, assets)  
* `dist/` – Production build output  
* `index.html` – Entry HTML file  
* `vite.config.js` – Vite config  
* `postcss.config.js` – PostCSS config  
* `.eslintrc`,                            `.stylelintrc`,  `.htmlhintrc` – Lint configs  
* `package.json` – Scripts & dependencies  

## 🧩 Vite Plugins

* [`vite-plugin-html`](https://github.com/vbenjs/vite-plugin-html) – Minifies HTML + template support  
* [`vite-plugin-imagemin`](https://github.com/vbenjs/vite-plugin-imagemin) – Optimizes images  
* [`vite-plugin-eslint2`](https://vite-plugin-eslint2.modyqyw.top/) – Lints JS  
* [`vite-plugin-stylelint`](https://vite-plugin-stylelint.modyqyw.top/) – Lints SCSS  
* [`@vitejs/plugin-legacy`](https://vitejs.dev/plugins/#vitejs/plugin-legacy) – Legacy browser support  

---

## ⚙️ Requirements

* [Node.js](https://nodejs.org/en) (v18+)  
* [degit](https://github.com/Rich-Harris/degit) (`npm install -g degit`)  

## 🚀 Getting Started

```bash
npx degit marcop135/vite-vanilla-sass-lint my-app
cd my-app
npm install
npm run dev 
````

## 🧪 Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 🧹 Linting & Formatting

This setup includes:

* `htmlhint` – Lint HTML
* `eslint` – Lint JavaScript
* `stylelint` – Lint CSS/SCSS

### 📌 Run manually:

```bash
npx htmlhint "src/**/*.html"
npx eslint "src/**/*.{js}"
npx stylelint "src/**/*.{css,scss,sass}"
```

---

## 📚 Official Documentation

* [Vite Docs](https://vitejs.dev/guide/)
* Vite Plugins
  + [`vite-plugin-html`](https://github.com/vbenjs/vite-plugin-html) – Minifies HTML + template support  
  + [`vite-plugin-imagemin`](https://github.com/vbenjs/vite-plugin-imagemin) – Optimizes images  
  + [`vite-plugin-eslint2`](https://vite-plugin-eslint2.modyqyw.top/) – Lints JS  
  + [`vite-plugin-stylelint`](https://vite-plugin-stylelint.modyqyw.top/) – Lints SCSS  
  + [ `@vitejs/plugin-legacy` ](https://vitejs.dev/plugins/#vitejs/plugin-legacy) – Legacy browser support  
* [Sass Docs](https://sass-lang.com/)
* [Modern Normalize](https://github.com/sindresorhus/modern-normalize)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [HTMLHint](https://htmlhint.com/)
* [Stylelint](https://stylelint.io/)
* [ESLint](https://eslint.org/docs/latest/)

---

## 🤝 Contributing

Contributions welcome! Open issues or submit PRs.

## 📝 License

Licensed under the [MIT](./LICENSE) License.

## 👤 Author

Created with passion by [Marco Pontili](https://marcopontili.com) - [GitHub](https://github.com/marcop135)
