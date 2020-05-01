class AppTitle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Zodiak Apa</h1>`;
  }
}

customElements.define('app-title', AppTitle);
