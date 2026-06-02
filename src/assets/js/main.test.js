import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Main App', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    vi.resetModules();
  });

  it('throws when the #app element is missing', async () => {
    document.body.innerHTML = '';
    await expect(import('./main.js')).rejects.toThrow('#app');
  });

  it('renders the wrapper into #app', async () => {
    await import('./main.js');
    expect(document.querySelector('#app .wrapper')).toBeTruthy();
  });

  it('renders main with the heading and logo', async () => {
    await import('./main.js');

    const h1 = document.querySelector('.wrapper main h1');
    expect(h1).toBeTruthy();
    expect(h1.textContent).toBe('Vite + Sass, No Fuss');

    const logo = document.querySelector('.wrapper main img.logo');
    expect(logo).toBeTruthy();
    expect(logo.alt).toBe('Vite logo');
  });

  it('renders the footer with the starter link', async () => {
    await import('./main.js');

    const link = document.querySelector('.wrapper footer small a');
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe(
      'https://github.com/marcop135/vite-vanilla-sass-lint'
    );
    expect(link.textContent).toBe('vite-vanilla-sass-lint');
    expect(
      document.querySelector('.wrapper footer small').textContent
    ).toContain('This project uses the');
  });
});
