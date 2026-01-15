import '../scss/main.scss';

import viteLogo from '../images/vite.svg';

// Get app element with error handling
const app = document.querySelector('#app');
if (!app) {
  console.error('App element not found');
  throw new Error('App element (#app) not found in DOM');
}

// Create wrapper element
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

// Create main element
const main = document.createElement('main');
const h1 = document.createElement('h1');
h1.textContent = 'Vite + Sass, No Fuss';
main.appendChild(h1);

const img = document.createElement('img');
img.src = viteLogo;
img.className = 'logo';
img.alt = 'Vite logo';
main.appendChild(img);

wrapper.appendChild(main);

// Create footer element
const footer = document.createElement('footer');
const small = document.createElement('small');
const link = document.createElement('a');
link.href = 'https://github.com/marcop135/vite-vanilla-sass-lint';
link.textContent = 'vite-vanilla-sass-lint';
small.appendChild(document.createTextNode('This project uses the '));
small.appendChild(link);
small.appendChild(document.createTextNode(' starter.'));
footer.appendChild(small);

wrapper.appendChild(footer);

// Append wrapper to app
app.appendChild(wrapper);
