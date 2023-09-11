import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryImages = galleryItems
	.map(
		image =>
			`<li class = "gallery__item">
    <a class = "gallery__link" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt = "${image.description}">
    </a>
    </li>`,
	)
	.join("");
gallery.insertAdjacentHTML("beforeend", galleryImages);

const galleryChield = document.querySelector(".gallery");
let instance = null;

const modalImgOn = event => {
	event.preventDefault();
	if (event.target.nodeName === "IMG") {
		instance = basicLightbox.create(
			`
    <img src="${event.target.getAttribute("data-source")}" width="800" height="600">
`,
			{
				onShow: () => {
					window.addEventListener("keydown", modalImgClose);
				},
				onClose: () => {
					window.removeEventListener("keydown", modalImgClose);
				},
			},
		);
		instance.show();
	}
};
galleryChield.addEventListener("click", modalImgOn);

const modalImgClose = event => {
	event.preventDefault();
	if (event.code === "Escape") {
		instance.close();
	}
	return;
};
console.log(galleryItems);
