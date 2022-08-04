const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const item = document.querySelector('#ingredients');

const allLi = ingredients.map(elem => {

  let liItem = document.createElement("li");
  liItem.classList.add('item');
  liItem.textContent = elem;
  return liItem;

})

item.append(...allLi);
