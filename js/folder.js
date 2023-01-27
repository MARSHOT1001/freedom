const folderForm = document.getElementById("folder-form");
const folderInput = folderForm.querySelector("#folder-form input");
const folderList = document.getElementById("#folder-list");

const FOLDERNAME_KEY = "folders";

let folders = [];

function saveFoldernames() {
  localStorage.setItem(FOLDERNAME_KEY, JSON.stringify(folders));
}

function deleteToDo(event) {
  const folder = event.target.parentElement;
  folder.remove();
  folders = folders.filter(
    (folderItem) => folderItem.id !== parseInt(folder.id)
  );
}

function paintItems(newFolder) {
  const folder = document.createElement("folder");
  folder.id = newFolder.id;
  const span = document.createElement("span");
  span.innerText = newFolder.text;
  const button = document.createElement("button");
  button.innerText = "remove";
  button.addEventListener("click", deleteFolder);
  folder.appendChild(span);
  folder.appendChild(button);
  folderList.appendChild(folder);
}
