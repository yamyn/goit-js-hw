'use strict';

function findBestEmployee(employees) {
  const KEY = 0;
  const VALUE = 1;

  const employeesArr = Object.entries(employees);
  let bestEmployee = employeesArr[0];

  for (const employee of employeesArr) {
    if (employee[VALUE] > bestEmployee[VALUE]) {
      bestEmployee = employee;
    }
  }

  return bestEmployee[KEY];
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
