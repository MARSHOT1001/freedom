<<<<<<< HEAD
const favForm = document.querySelector(".fav-form");
const favInputTitle = document.querySelector(".fav__input-title");
const favInputUrl = document.querySelector(".fav__input-url");
const folderContent = document.querySelector(".folder__content");

favs = [];

function createFav(newFav) {
  const fav = document.createElement("li");
  const anchor = document.createElement("a");
  // innerText에는 favInputTitle로부터 받은 value를
  anchor.innerText = newFav.text;
  // href 에는 favInputUrl로부터 받은 value를
  anchor.href("#");
  anchor.href = newFav.href;
  const button = document.createElement("i");
  button.classList.add("fas", "fa-times");
  button.addEventListener("click", deleteFav);
  fav.appendChild(anchor);
  fav.appendChild(button);
  folderContent.appendChild(fav);
}

function handleFavSubmit(event) {
  event.preventDefault();
  const newFavTitle = favInputTitle.value;
  const newFavUrl = favInputUrl.value;
  favInputTitle.value = "";
  favInputUrl.value = "";
  const newFavObj = {
    text: newFavTitle,
    href: newFavUrl,
  };
  favs.push(newFavObj);
  createFav(newFavObj);
}
=======
>>>>>>> d726f9655fcaa06dd727b64a33658bac1de01469
