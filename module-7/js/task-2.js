'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function createListItem(itemText) {
  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  return listItem;
}

const createAllItems = ingredients.map(ingredient =>
  createListItem(ingredient),
);

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(
  createAllItems[0],
  createAllItems[1],
  createAllItems[2],
  createAllItems[3],
  createAllItems[4],
  createAllItems[5],
); // Если бы Ul Генерировался Через JS, а в HTML Был какой то контейнер, можно было бы через map их добавлять не загружая страницу
