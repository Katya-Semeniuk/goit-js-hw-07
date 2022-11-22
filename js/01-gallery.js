import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const containerGallery = document.querySelector('.gallery');
const imgMarkup = createImgCardsMarkup(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', imgMarkup);
containerGallery.addEventListener('click', onContainerGalleryClick);
// console.log(imgMarkup)




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
  
const instance = basicLightbox.create(`
    <div class="modal">
      <img src='${original}' alt= '${description}'>  
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

