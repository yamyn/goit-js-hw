'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const ValidLength = {
  MIN_LENGTH: 4,
  MAX_LENGTH: 16,
};

const isLoginValid = function(login) {
  const loginChar = login.split('');
  if (
    loginChar.length >= ValidLength.MIN_LENGTH &&
    loginChar.length <= ValidLength.MAX_LENGTH
  ) {
    return false;
  }
  return true;
};

const isLoginUnique = function(allLogins, login) {
  for (const useLogin of logins) {
    let useLoginLowCase = useLogin.toLowerCase();
    let loginLowCase = login.toLowerCase();
    if (useLoginLowCase === loginLowCase) {
      return true;
    }
  }
  return false;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login)) {
    return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  if (isLoginUnique(allLogins, login)) {
    return console.log('Такой логин уже используется!');
  }
  allLogins.push(login);
  return console.log('Логин успешно добавлен!');
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);
