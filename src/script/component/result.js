class result extends HTMLElement {
  constructor() {
    super();
  }

  set clickEvent(event) {
    this._clickEvent = event;
  }

  set generate(zodiac) {
    this.render(zodiac);
  }

  render(zodiac) {
    this.innerHTML = `<article id="result">
    <div class="zodiac">
      <p class="title">Zodiak kamu adalah:</p>
      <img src="./assets/${zodiac}.png" id="zodiac-image" alt="" />
      <div id="zodiac-name">${zodiac}</div>
    </div>

    <button id="reinput">Coba Lagi?</button>
  </article>`;

    this.querySelector('#reinput').addEventListener('click', this._clickEvent);
  }

  remove() {
    this.innerHTML = ``;
  }
}

customElements.define('result-article', result);
