class InputData extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
  }

  get value() {
    const date = this.querySelector('#date');
    const month = this.querySelector('#month');
    const year = this.querySelector('#year');

    return `${date.value}-${month.value}-${year.value}`;
  }

  render() {
    this.innerHTML = `<article id="input-data">
    <h2>Masukkan Tanggal Lahir Kamu:</h2>

    <form>
      <div class="birth-date">
        <input
          type="number"
          id="date"
          placeholder="tgl"
          min="1"
          max="31"
          required
        />
        <input
          type="number"
          id="month"
          placeholder="bulan"
          min="1"
          max="12"
          required
        />
        <input
          type="number"
          id="year"
          placeholder="tahun"
          min="1"
          max="2020"
          required
        />
      </div>

      <input type="submit" value="Submit" id="submit-date" />
    </form>
  </article>`;

    this.querySelector('form').addEventListener('submit', (e) => {
      this._clickEvent();
      e.preventDefault();
    });
  }

  remove() {
    this.innerHTML = ``;
  }
}

customElements.define('input-data', InputData);
