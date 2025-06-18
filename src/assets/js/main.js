import '../scss/main.scss';

import viteLogo from '../images/vite.svg';

document.querySelector('#app').innerHTML = /*html*/ `
    <div class="wrapper">
      <main>
        <h1>Vite + Sass, No Fuss</h1>
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </main>
      <footer>
        <small>
          This project uses the <a href="https://github.com/marcop135/vite-vanilla-sass-lint">vite-vanilla-sass-lint</a> starter.
        </small>
      </footer>
    </div>
`;
