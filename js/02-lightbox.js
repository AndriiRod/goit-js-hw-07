import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce((acc, { preview, original, description }) => {
  return (acc += `<li class = "gallery__item"><a class = "gallery__link" href = ${original} ><img class = "gallery__image" alt = "${description}" src = ${preview}  loading="lazy"></a></li>`);
}, '');

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
