// console.log(window);
// console.log(window.document);
// console.dir(document);

// const titleRef = document.querySelector('h1');
// // console.log(titleRef);
// console.dir(titleRef);

// titleRef.textContent = 'Привет, добро пожаловать!'

// const linkRef = document.querySelector('.nav__link');
// console.log(linkRef);

// const linksRef = document.querySelectorAll('.nav__link');
// console.log(linksRef);

// const imageRef = document.querySelector('.hero-image');
// console.dir(imageRef);

// console.log(imageRef.src);
// console.log(imageRef.alt);

// console.log(imageRef.getAttribute('src'));
// console.log(imageRef.getAttribute('alt'));
// console.log(imageRef.getAttribute('class'));
// console.log(imageRef.getAttribute('width'));



// imageRef.alt = 'It is my photo';

// imageRef.setAttribute('alt', 'It is my photo)');

// const activeLinkRef = document.querySelector('.nav__link-active');
// console.log(activeLinkRef);
// console.dir(activeLinkRef);

// activeLinkRef.href = '/blog';
// activeLinkRef.style.color = 'red';

// console.log(activeLinkRef.classList.contains('red'));

// activeLinkRef.classList.add('nav__link-primary');
// activeLinkRef.classList.remove('nav__link-primary');


// const titleRef = document.createElement('h1');
// console.log(titleRef);
// console.dir(titleRef);

// titleRef.textContent = 'Динамически созданный заголовок! Вау!';
// titleRef.classList.add('site-title');
// titleRef.id = 'title';
// console.log(titleRef);

const product = {
    name: 'Phones',
    description: 'Best phones in whole world.',
    price: 2000,
    available: true,
};

const containerRef = document.createElement('div');
containerRef.classList.add('product-card');

console.log(containerRef);

const titleRef = document.createElement('h2');
titleRef.textContent = product.name;
titleRef.classList.add('product-card__name')

console.log(titleRef);

const descrRef = document.createElement('p');
descrRef.textContent = product.description;

console.log(descrRef);

const priceRef = document.createElement('p');
priceRef.textContent = `Price: ${product.price} credits`;

console.log(priceRef);

// containerRef.appendChild(titleRef);
// containerRef.appendChild(descrRef);
// containerRef.appendChild(priceRef);

containerRef.append(titleRef, descrRef, priceRef);

console.log(containerRef);

const cardRootRef = document.querySelector('#root');
cardRootRef.appendChild(containerRef);
