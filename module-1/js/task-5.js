"use strict";

const chinaPrice = 100;
const сhilePrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaicaPrice = 120;

let price;
let countryLc;
let message;

const country = prompt("Из какой вы страны?");

if (country === null || country === "") {
  message = "Ошибка ввода!";
} else {
  countryLc = country.toLowerCase();
  switch (country) {
    case "китай":
      price = chinaPrice;
      break;

    case "чили":
      price = chinaPrice;
      break;

    case "австралия":
      price = chinaPrice;
      break;

    case "индия":
      price = chinaPrice;
      break;

    case "ямайка":
      price = chinaPrice;
      break;
  }
}
