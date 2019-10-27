"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const verification = prompt("Пожалуйста введите ваш пароль");

if (verification === null) {
  message = "Отменено пользователем!";
} else {
  ADMIN_PASSWORD === verification
    ? (message = "Добро пожаловать!")
    : (message = "Доступ запрещен, неверный пароль!");
}

console.log(message);
