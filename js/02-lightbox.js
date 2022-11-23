import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const containerGallery = document.querySelector('.gallery');
const imgMarkup = createImgCardsMarkup(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', imgMarkup);
containerGallery.addEventListener('click', onContainerGalleryClick);


function createImgCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
         return`
      <a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>`
        })
        .join('');
    
}
console.log(createImgCardsMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: "alt",
        captionDelay : 250,
 })
function onContainerGalleryClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) return

    
}
