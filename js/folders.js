const favDevForm = document.getElementById("fav-dev-form");
const favInputDev = document.getElementById("fav__input-dev");
const folderDevContent = document.getElementById("folder__dev-content");

const FAV_DEV_KEY = "favdevs";

let favDevs = [];

function saveFavDevs() {
  localStorage.setItem(FAV_DEV_KEY, JSON.stringify(favDevs));
}

function deleteFavDev(event) {
  const favDev = event.target.parentElement;
  favDev.remove();
  favDevs = favDevs.filter((favDev) => favDev.href !== parseInt(favDev.href));
  saveFavDevs();
}

function createFavDev(newFavDev) {
  const favDev = document.createElement("div");
  favDev.id = newFavDev.id;
  const devLink = document.createElement("a");
  devLink.href = newFavDev.href;
  const devDelete = document.createElement("i");
  devDelete.classList.add("fas", "fa-times");
  devDelete.addEventListener("click", deleteFavDev);
  favDev.appendChild(devLink);
  favDev.appendChild(devDelete);
  folderDevContent.appendChild(favDev);
}

function handleFavDevSubmit(event) {
  event.preventDefault();
  const newFavDev = favInputDev.value;
  favInputDev.value = "";
  const newFavDevObj = {
    href: newFavDev,
    id: Date.now(),
  };
  favDevs.push(newFavDevObj);
  createFavDev(newFavDevObj);
  saveFavDevs();
}

favDevForm.addEventListener("submit", handleFavDevSubmit);

const savedFavDevs = localStorage.getItem(FAV_DEV_KEY);

if (savedFavDevs !== null) {
  const parsedFavDevs = JSON.parse(savedFavDevs);
  favDevs = parsedFavDevs;
  parsedFavDevs.forEach(createFavDev);
}
