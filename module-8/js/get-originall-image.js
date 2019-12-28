'use strict';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  modalWin: document.querySelector('.js-lightbox'),
  bigImage: document.querySelector('img.lightbox__image'),
};

refs.galleryList.addEventListener('click', handleClickOnGallery);

function handleClickOnGallery(event) {
  event.preventDefault();
  const changedImg = event.target;

  if (event.currentTarget === changedImg) {
    return;
  }

  const bigImageUrl = changedImg.dataset.source;
  const bigImageAlt = changedImg.getAttribute('alt');

  openModalWin(bigImageUrl, bigImageAlt);
}

function openModalWin(url, alt) {
  const modal = refs.modalWin;
  modal.classList.add('is-open');
  const image = refs.bigImage;
  image.setAttribute('src', url);
  image.setAttribute('alt', alt);

  //   const closeButton = window.querySelector(
  //     'button[data-action="close-lightbox"]',
  //   );
  //   const backArea = window.querySelector('.lightbox__overlay');
  // Если делать дополнительное задание получаеться кнопку не обязательно искать, так как событие всеравно сплывет на верхний див

  modal.addEventListener('click', event => closeModal());
  window.addEventListener('keydown', handleClickOnEsc);
}

function handleClickOnEsc(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}

function closeModal() {
  const image = refs.bigImage;
  if (event.target === image) {
    return;
  }
  refs.modalWin.classList.remove('is-open');
  image.removeAttribute('src');
  window.removeEventListener('keydown', handleClickOnEsc);
}
