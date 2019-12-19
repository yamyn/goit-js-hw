'use strict';

/* <input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" /> */

const validInput = document.querySelector('#validation-input');
validInput.addEventListener('change', validationText.bind(validInput));

function validationText() {
  this.classList.remove('invalid');
  const lengthValue = this.value.split('').length;
  const validation = this.dataset.length;
  this.classList.toggle('valid');
  if (lengthValue <= validation) {
    this.classList.replace('valid', 'invalid');
  }
}
