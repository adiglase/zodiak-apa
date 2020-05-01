import '../component/input-data.js';
import '../component/result.js';

const main = () => {
  const inputElement = document.querySelector('input-data');
  const resultElement = document.querySelector('result-article');

  const toggleDisplay = async () => {
    if (inputElement.innerHTML) {
      inputElement.remove();
    } else {
      inputElement.render();
      resultElement.innerHTML = ``;
    }
  };

  const getData = async () => {
    document.querySelector('#submit-date').value = 'Sedang diproses...';

    const response = await fetch(
      `https://script.google.com/macros/exec?service=AKfycbw7gKzP-WYV2F5mc9RaR7yE3Ve1yN91Tjs91hp_jHSE02dSv9w&nama=ican&tanggal=${inputElement.value}`
    );

    const data = await response.json();
    resultElement.generate = data.data.zodiak;

    document.querySelector('#submit-date').value = 'Submit';
    toggleDisplay();
  };

  inputElement.clickEvent = getData;
  resultElement.clickEvent = toggleDisplay;
};

export default main;
