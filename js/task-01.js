const collection = document.querySelectorAll('.item');

console.log(`Number of categories: ${collection.length}`);

collection.forEach((item) => {

  const text = item.querySelector('h2').textContent;
  console.log(`Category: ${text}`);

  const lengEl = item.querySelectorAll('li');
  console.log(`Elements: ${lengEl.length}`);
});
