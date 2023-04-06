import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce((acc, { preview, original, description }) => {
  return (acc += `<li class = "gallery__item"><a class = "gallery__link" href = ${original} ><img class = "gallery__image" alt = "${description}" src = ${preview}  loading="lazy"></a></li>`);
}, '');

console.log(galleryItems[0].description);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
