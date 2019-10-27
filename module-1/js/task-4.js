"use strict";

let credits = 23580;
const pricePerDroid = 3000;

const droidNum = prompt("Какое количество дронов вы хотели бы купить?");
let message;
let totalPrice;

if (droidNum === null) {
  message = "Отменено пользователем!";
} else {
  totalPrice = pricePerDroid * droidNum;
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    credits = credits - totalPrice;
    message = `Вы купили ${droidNum} дроидов, на счету осталось ${credits} кредитов.`;
  }
}
console.log(message);
