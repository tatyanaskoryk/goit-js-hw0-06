// const textInput = document.getElementById('validation-input');

// textInput.addEventListener("blur", () => {
//   const expectedLength = parseInt(textInput.getAttribute('data-length'));
//   const currentLength = textInput.value.length;

//   if (currentLength === expectedLength) {
//     textInput.classList.remove('invalid');
//     textInput.classList.add('valid');
//   } else {
//     textInput.classList.remove('valid');
//     textInput.classList.add('invalid');
//   }
// });


const textInput = document.getElementById('validation-input');
function setValidationClass(a, b) {
  if (b) {
    a.classList.remove('invalid');
    a.classList.add('valid');
  } else {
    a.classList.remove('valid');
    a.classList.add('invalid');
  }
} textInput.addEventListener("blur", () => {
  const expectedLength = parseInt(textInput.getAttribute('data-length'));
  const currentLength = textInput.value.length;
  setValidationClass(textInput, currentLength === expectedLength);
});

