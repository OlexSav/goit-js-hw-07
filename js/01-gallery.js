import { galleryItems } from "./gallery-items.js";
// Change code below this line

const pictureContainer = document.querySelector("ul.gallery");
const cardMarkup = createPictureCards(galleryItems);

pictureContainer.insertAdjacentHTML("beforeend", cardMarkup);
pictureContainer.addEventListener("click", choosePictureCard);

function createPictureCards(items) {
  return items
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
    )
    .join("");
}

let lightBox;

function choosePictureCard(evt) {
  evt.preventDefault();
  if (evt.target.tagName === "IMG") {
    lightBox = basicLightbox.create(
      `<img src="${evt.target.dataset.source}" alt="${evt.target.alt}">`
    );
    lightBox.show();
  }
  window.addEventListener("keydown", closeModalWindow);
}

function closeModalWindow(evt) {
  if (evt.key === "Escape") {
    lightBox.close();
    window.removeEventListener("keydown", closeModalWindow);
  }
}

console.log(galleryItems);
