const value = document.querySelector('#value');

let counterValue = 0;
value.innerHTML = counterValue;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnDecrement.addEventListener('click', () => sum(-1));
btnIncrement.addEventListener('click', () => sum(+1));

function sum(delta) {
  counterValue += delta;
  value.innerHTML = counterValue;
}
