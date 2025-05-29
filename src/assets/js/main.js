import "../scss/main.scss";

import viteLogo from "../images/vite.svg";

document.querySelector("#app").innerHTML = /*html*/ `
    <div class="container">
      <main>
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </main>
      <footer>
        <small>
          This project uses the <a href="https://github.com/marcop135/vite-vanilla-sass-lint">vite-vanilla-sass-lint</a> starter by <a href="https://marcopontili.com" target="_blank" rel="noopener noreferrer">@marcop135</a>.
        </small>
      </footer>
    </div>
`;
