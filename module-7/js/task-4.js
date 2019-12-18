'use strict';

let counterValue = 0;

const value = document.querySelector('#value');
value.textContent = counterValue;

const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');

decr.addEventListener('click', () => changeValue(decr));
incr.addEventListener('click', () => changeValue(incr));

function changeValue(btn) {
  if (btn === decr) {
    counterValue -= 1;
  } else if (btn === incr) {
    counterValue += 1;
  }
  value.textContent = counterValue;
}
