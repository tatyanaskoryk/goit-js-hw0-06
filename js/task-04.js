
let counterValue = 0;

const valueElement = document.getElementById('value');

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
}); 

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
});






