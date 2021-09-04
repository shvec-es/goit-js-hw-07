const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.getElementById('ingredients');
  
const addIngredients = (array) =>
  array.map(elem => {
    const itemEl = document.createElement('li');
    itemEl.textContent = elem;
    return itemEl;
  });

listEl.append(...addIngredients(ingredients));