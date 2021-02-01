
// const totalCategories = document.querySelectorAll('.item');

// console.log(`В списке ${totalCategories.length} категории.`);


// const categoriesArray = [...totalCategories]
//     .map(categories => `Категория: ${categories.children[0].textContent}
//     Количество елементов: ${categories.children[1].children.length}`)
//     .join("\n");
  
// console.log(categoriesArray);
    
const itemRef = document.querySelectorAll('.item');

console.log(`В списке ${itemRef.length} категории.`);


itemRef.forEach(item => {
    const titleContent = item.firstElementChild.textContent;
    const totalElements = item.lastElementChild.children.length;

    console.log(`Категория: ${titleContent} \n Количество елементов: ${totalElements}`);

});

