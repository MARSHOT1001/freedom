const favForm = document.querySelector(".fav-form");
const favInputTitle = document.querySelector(".fav__input-title");
const favInputUrl = document.querySelector(".fav__input-url");
const folderContent = document.querySelector(".folder__content");

const FAVS_KEY = "favs";

let favs = [];

function saveFavs() {
  localStorage.setItem(FAVS_KEY, JSON.stringify(favs));
}

function deleteFav(event) {
  const li = event.target.parentElement;
  li.remove();
  favs = favs.filter((fav) => fav.href !== parseInt(li.href));
  saveFavs();
}

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
  saveFavs();
}

favForm.addEventListener("submit", handleFavSubmit);

const savedFavs = localStorage.getItem(FAVS_KEY);

if (savedFavs !== null) {
  const parsedFavs = JSON.parse(savedFavs);
  favs = parsedFavs;
  parsedFavs.forEach(createFav);
}
