const folderForm = document.getElementById("folder-form");
const folderInput = folderForm.querySelector("#folder-form input");
const folderList = document.getElementById("#folder-list");

const FOLDERNAME_KEY = "folders";

let folders = [];

function saveFoldernames() {
  localStorage.setItem(FOLDERNAME_KEY, JSON.stringify(folders));
}
