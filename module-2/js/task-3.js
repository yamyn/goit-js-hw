'use strict';

const findLongestWord = function(string) {
  let stringArr = string.split(' ');
  let stringArrCount = stringArr.length;
  let wordLength = stringArr[0].length;
  let longestWord = stringArr[0];

  for (let i = 1; i < stringArrCount; i += 1) {
    if (wordLength < stringArr[i].length) {
      wordLength = stringArr[i].length;
      longestWord = stringArr[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
