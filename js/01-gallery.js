import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce((acc, { preview, original, description }) => {
  return (acc += `<li class = "gallery__item"><a class = "gallery__link"><img class = "gallery__image" alt = ${description} src = ${preview} data-source = ${original} loading="lazy"></a></li>`);
}, '');

let LightboxModalImg;

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', openModalImg);

function closeModalImg(e) {
  if (e.code === 'Escape') {
    LightboxModalImg.close();
    document.removeEventListener('keydown', closeModalImg);
  }
}

function openModalImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
  LightboxModalImg = basicLightbox.create(`<img  src = ${e.target.dataset.source} >`);
  LightboxModalImg.show();
  document.addEventListener('keydown', closeModalImg);
}
