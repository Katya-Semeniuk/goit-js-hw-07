import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const containerGallery = document.querySelector('.gallery');
const imgMarkup = createImgCardsMarkup(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', imgMarkup);
containerGallery.addEventListener('click', onContainerGalleryClick);



function createImgCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
  <div class="gallery__item">
  <a class="gallery__link" href= '${original}'>
    <img
      class="gallery__image"
      src= '${preview}'
      data-source= '${original}'
      alt= '${description}'
      />
    </a>
</div> `
        })
      .join('');

}
createImgCardsMarkup(galleryItems);




function onContainerGalleryClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
      return 
  }
  

  const currentFullImagePath = e.target.dataset.source;
  const currentImgAlt = e.target.dataset.alt;
  
const instance = basicLightbox.create(`
    <div class="modal">
      <img width="800" height="600" src="${currentFullImagePath}" alt="${currentImgAlt}">
    </div>
`, {
    onShow: (instance) => {
        containerGallery.addEventListener('keydown', onEscapeButton)
  },
  onClose: (instance) => {
        containerGallery.removeEventListener('keydown', onEscapeButton)
    }
})
  instance.show();

  function onEscapeButton(e) {
    if (e.key === 'Escape') {
      instance.close();
   }
 }
}





