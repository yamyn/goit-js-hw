'use strict';

const checkForSpam = function(
  string,
  firstForbdn = 'spam',
  secondForbdn = 'sale',
) {
  console.log(string);
  let stringArr = string.split(' ');
  let stringArrCount = stringArr.length;

  for (let i = 0; i < stringArrCount; i += 1) {
    let checkingItem = stringArr[i].toLowerCase();
    let checkWord =
      checkingItem.includes(firstForbdn) || checkingItem.includes(secondForbdn);

    if (checkWord) {
      console.log('Prohibited words found!');
      return true;
    }
  }

  console.log('No phobic words');
  return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
