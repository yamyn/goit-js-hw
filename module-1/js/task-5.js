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
  alert("Ошибка ввода!");
} else {
  countryLc = country.toLowerCase();
  switch (countryLc) {
    case "китай":
      price = chinaPrice;
      break;

    case "чили":
      price = сhilePrice;
      break;

    case "австралия":
      price = australiaPrice;
      break;

    case "индия":
      price = indiaPrice;
      break;

    case "ямайка":
      price = jamaicaPrice;
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}

if (price !== undefined) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
  alert(message);
}
