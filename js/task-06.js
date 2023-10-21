const textInput = document.getElementById('validation-input');

textInput.addEventListener("blur", () => {
  const expectedLength = parseInt(textInput.getAttribute('data-length'));
  const currentLength = textInput.value.length;

  if (currentLength === expectedLength) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
});