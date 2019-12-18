'use strict';

const amountCategories = сalculationChild('#categories');
console.log(`В списке ${amountCategories} категории.`);

const categories = [...document.querySelectorAll('.item')];
categories.map(category => {
  const tittle = category.firstElementChild.textContent;
  const calcCategoryElem = сalculationChild(category.lastElementChild);
  return console.log(
    `Категория: ${tittle}
Количество элементов: ${calcCategoryElem}`,
  );
});

function сalculationChild(elem) {
  if (typeof elem === 'string') {
    elem = document.querySelector(elem);
  }
  const elemChild = elem.children;
  return elemChild.length;
}
