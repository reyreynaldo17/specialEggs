import 'regenerator-runtime';
// css
import '../styles/header.css';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/card.css';
import '../styles/list.css';
import '../styles/jumbotron.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import '../styles/loader.css';
// js
import './component/app-bar';
import './component/skip-content';
import './component/footer-bar';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menu_toggle'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
