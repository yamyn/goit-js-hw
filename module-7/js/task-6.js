'use strict';

/* <input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" /> */

const validInput = document.querySelector('#validation-input');
validInput.addEventListener('change', validationText.bind(validInput));

function validationText() {
  this.classList.remove('invalid', 'valid');
  const lengthValue = this.value.length;
  const validation = this.dataset.length;
  if (lengthValue !== validation) {
    this.classList.add('invalid');
    return;
  }
  this.classList.add('valid');
}
