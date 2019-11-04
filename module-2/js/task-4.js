'use strict';

const formatString = function(string) {
  let stringCount = string.length;
  let basicString = 40;
  let conditionCheck = stringCount > basicString;

  if (conditionCheck) {
    let stringArr = string.split('');
    let cuttedArr = stringArr.slice(0, basicString);
    cuttedArr.splice(basicString - 3, 3, '...');
    let cuttedString = cuttedArr.join('');
    return cuttedString;
  } else {
    return string;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
