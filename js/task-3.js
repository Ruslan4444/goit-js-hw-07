// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryListRef = document.querySelector('#gallery');

// const gallaryLiRef = images.map(image => {
//     const itemRef = document.createElement('li');
//     const imageRef = document.createElement('img');
//     imageRef.setAttribute('src', image.url);
//     imageRef.setAttribute('alt', image.alt);
//     imageRef.setAttribute('style', "list-style: none; display: flex; width: 500px; height: 300px;");

//     itemRef.appendChild(imageRef);
//     itemRef.classList.add('gallery-item');
//     return itemRef;
// });

// galleryListRef.append(...gallaryLiRef);

// console.log(galleryListRef);


// const galleryList = document.querySelector('#gallery');
// galleryList.setAttribute('style', "list-style: none;");

const galleryListRef = document.querySelector('#gallery');

const liRef = images.map(image => {
  return image = `<li><img src = "${image.url}" alt = "${image.alt}"></li>`;
});

galleryListRef.insertAdjacentHTML('afterbegin', liRef.join(''));
console.log(galleryListRef);

