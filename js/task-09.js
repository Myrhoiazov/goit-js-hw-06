function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const btn = document.querySelector('button.change-color');
const spanColor = document.querySelector('.color');



btn.addEventListener('click', btnChangeColor);

function btnChangeColor(event) {
  event.preventDefault();

  let color = getRandomHexColor()
  document.body.style.backgroundColor = color;

  spanColor.textContent = color;
}

