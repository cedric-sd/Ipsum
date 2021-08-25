import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class LivForms extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    // const entry = document.createElement('section');
    const test = this.getAttribute('test');
    const shadow = this.attachShadow({ mode: 'open' });

    ReactDOM.render(
      <React.StrictMode>
        <App test={!!JSON.parse(test || 'false')} />
      </React.StrictMode>,
      shadow
    );
  }
}

customElements.define('liv-form', LivForms);

reportWebVitals();
