'use strict';

let input;
const numbers = [];
let total = 0;

const inputCount = function() {
  do {
    input = prompt('Привет) Введи число');
    let inputNum = +input;
    if (inputNum === NaN) break;
    numbers.push(inputNum);
  } while (input !== null);

  for (let number of numbers) {
    total += number;
  }
  let resultSting = `Общая сумма чисел равна ${total}`;
  return console.log(resultSting);
};

inputCount();
