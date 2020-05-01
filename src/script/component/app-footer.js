class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>
    &copy; <a href="instagram.com/adiglase">adiglase</a> | Icons made by
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
      >Freepik</a
    >
    from
    <a href="https://www.flaticon.com/" title="Flaticon"
      >www.flaticon.com</a
    >
  </div>`;
  }
}

customElements.define('app-footer', AppFooter);
