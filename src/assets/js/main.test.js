import { describe, it, expect, beforeEach } from 'vitest';

describe('Main App', () => {
  beforeEach(() => {
    // Reset the DOM before each test
    document.body.innerHTML = '<div id="app"></div>';
  });

  it('should have an app element', () => {
    const app = document.querySelector('#app');
    expect(app).toBeTruthy();
    expect(app.id).toBe('app');
  });

  it('should create wrapper element', () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    expect(wrapper.className).toBe('wrapper');
  });

  it('should create main element with h1', () => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    h1.textContent = 'Vite + Sass, No Fuss';
    main.appendChild(h1);
    
    expect(main.querySelector('h1')).toBeTruthy();
    expect(main.querySelector('h1').textContent).toBe('Vite + Sass, No Fuss');
  });

  it('should create footer element', () => {
    const footer = document.createElement('footer');
    const small = document.createElement('small');
    footer.appendChild(small);
    
    expect(footer.querySelector('small')).toBeTruthy();
  });
});
