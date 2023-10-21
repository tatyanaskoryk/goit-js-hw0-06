const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');



const ingredientElements = ingredients.map(ingredientText => {

  const ingredient = document.createElement('li');
  
  ingredient.textContent = ingredientText;
  ingredient.classList.add('item');
  return ingredient;
});

list.append(...ingredientElements);