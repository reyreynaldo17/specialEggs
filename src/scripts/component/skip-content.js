class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#content" class="skip-link">Menuju ke konten</a>
        `;
  }
}

customElements.define('skip-content', SkipContent);
