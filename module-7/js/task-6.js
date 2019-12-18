'use strict';

/* <input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" /> */

const validInput = document.querySelector('#validation-input');
validInput.addEventListener('change', validationText.bind(validInput));

function validationText() {
  console.log('this: ' + this);
  const lengthValue = this.value.split('').length;
  const validation = this.dataset.length;
  if (lengthValue < validation) {
    if (this.classList.contains('valid')) {
      this.classList.remove('valid');
    }
    this.classList.toggle('invalid');
    return;
  }
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
  }
  this.classList.toggle('valid');
}
