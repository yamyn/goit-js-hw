'use strict';

import menu from '../menu.json';
import menuItemTemplate from '../templates/menu-item.hbs';

const menuMarkup = generetaToMakrup(menu, menuItemTemplate);
addedMarkuptoHtml('.js-menu', menuMarkup);

function generetaToMakrup(obj, template) {
  const markupArr = obj.map(elem => template(elem));
  const markup = markupArr.join('');
  return markup;
}

function addedMarkuptoHtml(selektor, markup) {
  const parent = document.querySelector(`${selektor}`);
  parent.insertAdjacentHTML('beforeend', markup);
}
