// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию
// ' в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().



const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

const itemRef = ingredients.map(item => {
    const elementRef = document.createElement('li')
    elementRef.textContent = item;
    return elementRef;
});

listRef.append(...itemRef);

console.log(listRef);

