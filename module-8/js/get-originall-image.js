'use strict';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  modalWin: document.querySelector('.js-lightbox'),
};

refs.galleryList.addEventListener('click', handleClickOnGallery);

function handleClickOnGallery(event) {
  event.preventDefault();

  if (event.currentTarget === event.target) {
    return;
  }

  const bigImageUrl = event.target.dataset.source;
  const bigImageAlt = event.target.getAttribute('alt');

  openModalWin(bigImageUrl, bigImageAlt);
}

function openModalWin(url, alt) {
  refs.modalWin.classList.add('is-open');
  const image = refs.modalWin.querySelector('img.lightbox__image');
  image.setAttribute('src', url);
  image.setAttribute('alt', alt);

  const closeButton = refs.modalWin.querySelector(
    'button[data-action="close-lightbox"]',
  );
  closeButton.addEventListener('click', () => handleClickForClose(image));
}

function handleClickForClose(image) {
  refs.modalWin.classList.remove('is-open');
  image.removeAttribute('src');
}
