const inputEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputEl.addEventListener('input', () => {
    text.style.fontSize = inputEl.value + 'px';
});