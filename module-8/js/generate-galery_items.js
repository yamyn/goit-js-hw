import images from './gallery-items.js';

function createGaleryItem({ preview, description }) {
  return `<li class="galery__item"><a href="#" class="gallery__link"><img class="gallery__image" src="${preview}" alt="${description}"></a></li>`;
}

const newGaleryItems = images.map(image => createGaleryItem(image)).join('');

const galeryList = document.querySelector('.js-gallery');
galeryList.insertAdjacentHTML('beforeend', newGaleryItems);
