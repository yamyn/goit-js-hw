'use strict';

const name = document.querySelector('#name-input');
const nameField = document.querySelector('#name-output');
name.addEventListener('input', () => {
  nameField.textContent = name.value;
  if (!name.value) {
    nameField.textContent = 'незнакомец';
  }
});
