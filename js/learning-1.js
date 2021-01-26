// const product = {
//     name: 'Phones',
//     description: 'Best phones in whole world.',
//     price: 2000,
//     available: true,
// };

const products = [
    {
        name: 'Phones',
        description: 'Best phones in whole world.',
        price: 2000,
        available: true,
    },
    {
        name: 'Phones',
        description: 'Best phones in whole world.',
        price: 2000,
        available: false,
    },
    {
        name: 'Phones',
        description: 'Best phones in whole world.',
        price: 2000,
        available: true,
    },

];
const createProductCard = product => {
    const containerRef = document.createElement('div');
    containerRef.classList.add('product-card');


    const titleRef = document.createElement('h2');
    titleRef.textContent = product.name;
    titleRef.classList.add('product-card__name', product.available
        ? 'product-card__name-available'
        : 'product-card__name-not-available');

    const descrRef = document.createElement('p');
    descrRef.textContent = product.description;


    const priceRef = document.createElement('p');
    priceRef.textContent = `Price: ${product.price} credits`;

    containerRef.append(titleRef, descrRef, priceRef);

    return containerRef;
}

// console.log(createProductCard(products));

// console.log(products);

const productCards = products.map(product => createProductCard(product));
console.log(productCards);

const productListRef = document.querySelector('.js-product');
console.log(productListRef);

productListRef.append(...productCards);


