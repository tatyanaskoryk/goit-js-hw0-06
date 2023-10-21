
const listWithId = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${listWithId.length}`);

listWithId.forEach(category => {
    const listName = category.querySelector('h2').textContent;
    const listElements = category.querySelectorAll('li').length;
    console.log(`Category: ${listName}`);
    console.log(`Elements: ${listElements}`);
});