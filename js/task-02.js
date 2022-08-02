const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const item = document.querySelector('#ingredients');

ingredients.forEach(elem => {
  const allLi = [];
  let liItem = document.createElement("li");
  liItem.className = 'item';
  liItem.textContent = elem;

  allLi.push(liItem);
  item.append(...allLi);
})