const favForm = document.querySelector(".fav-form");
const favInputTitle = document.querySelector(".fav__input-title");
const favInputUrl = document.querySelector(".fav__input-url");
const folderContent = document.querySelector(".folder__content");

function createFav() {
  const fav = document.createElement("div");
  fav.classList.add("fav");
  const anchor = document.createElement("a");
  anchor.classList.add("fav__anchor");
  const button = document.createElement("i");
  button.classList.add("fas", "fa-times");
  button.addEventListener("click", deleteFav);
  fav.appendChild(anchor);
  fav.appendChild(button);
  folderContent.appendChild(fav);
}
