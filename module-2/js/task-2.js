"use strict";

const calculateEngravingPrice = function(message, pricePerWord) {
  console.log(message);
  const wordsArr = message.split(" ");
  console.log(wordsArr);
  const priceTag = wordsArr.lenght * pricePerWord;
  return priceTag;
};

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40));
