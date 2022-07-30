import { galleryItems } from './gallery-items.js';
// Change code below this line
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
}
const refs = {
  gallery: document.querySelector('.gallery'),
};
const modalTemplate = link => `<div class="modal">
        <img src="${link}" alt="Photo"/>
    </div>`;

refs.gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
refs.gallery.addEventListener('click', onImageClick);

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
  </div>`,
    )
    .join('');
}
function onImageClick(e) {
  e.preventDafault();
  const imgHref = e.target.dataset.source;
  // console.log(imgHref);
  const instance = basicLightbox.create(`<div class="modal">
        <img src="${imgHref}" alt="Photo"/>
    </div>`);

  instance.show();
}
console.log(galleryItems);
document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    instance.close();
  }
});
