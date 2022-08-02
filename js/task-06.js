const inputEl = document.querySelector('#validation-input');
const lengthEl = inputEl.dataset.length;

inputEl.addEventListener('blur', () => {
  if (inputEl.value.length != lengthEl) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
});



