"use strict";

let input = 0;
let total = 0;

while (total !== null) {
  total = prompt("Введите число!");
  if (total === null) {
    break;
  }
  total = Number(total);
  input = input + total;
}

alert(`'Общая сумма чисел равна ${input}`);
