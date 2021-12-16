class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
      <p>Created with <i class="fas fa-heart"> </i> by <span>Reynaldo</span></p>
      <p>Copyright © 2021 - <span class="footer_logo">SpecialEgg</span> </p>
      </footer>          
      `;
  }
}

customElements.define('footer-bar', FooterBar);
