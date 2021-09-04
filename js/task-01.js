const itemEl = document.querySelectorAll('.item');
console.log(`В списке ${itemEl.length} категории.`);

const itemNameEl = document.querySelectorAll('.item h2');
itemNameEl.forEach(elem => {
    console.log(`Категория: ${elem.textContent}
Количество элементов: ${elem.nextElementSibling.children.length}`);
})

