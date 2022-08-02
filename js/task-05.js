const inputEl = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  output.innerHTML = inputEl.value === '' ? 'Anonymous' : inputEl.value;
});
