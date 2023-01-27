// const folderForm = document.getElementById("folder-form");
// const folderInput = document.getElementById("folder-input");
// const folderList = document.getElementById("folder-list");

// const FOLDERNAME_KEY = "folders";

// let folders = [];

// function saveFoldernames() {
//   localStorage.setItem(FOLDERNAME_KEY, JSON.stringify(folders));
// }

// function deleteFolder(event) {
//   const folder = event.target.parentElement.parentElement;
//   folderList.removeChild(folder);
//   folders = folders.filter(
//     (folderItem) => folderItem.id !== parseInt(folder.id)
//   );
//   saveFoldernames();
// }

// function paintFolders(newFolder) {
//   const folder = document.createElement("li");
//   folder.classList.add("folder");
//   folder.id = newFolder.id;
//   const title = document.createElement("div");
//   const span = document.createElement("span");
//   span.innerText = newFolder.text;
//   const button = document.createElement("button");
//   button.innerText = "remove";
//   button.addEventListener("click", deleteFolder);
//   title.appendChild(span);
//   title.appendChild(button);
//   folder.appendChild(title);
//   folderList.appendChild(folder);
// }

// function handleFolderSubmit(event) {
//   event.preventDefault();
//   const newFolder = folderInput.value;
//   folderInput.value = "";
//   const newFolderObj = {
//     text: newFolder,
//     id: Date.now(),
//   };
//   folders.push(newFolderObj);
//   paintFolders(newFolderObj);
//   saveFoldernames();
// }

// folderForm.addEventListener("submit", handleFolderSubmit);

// const savedFolders = localStorage.getItem(FOLDERNAME_KEY);

// if (savedFolders !== null) {
//   const parsedFolders = JSON.parse(savedFolders);
//   folders = parsedFolders;
//   parsedFolders.forEach(paintFolders);
// }

const folderForm = document.getElementById("folder-form");
const folderInput = document.getElementById("folder-input");
const folderList = document.getElementById("folder-list");

const FOLDERNAME_KEY = "folders";

let folders = [];

function saveFoldernames() {
  localStorage.setItem(FOLDERNAME_KEY, JSON.stringify(folders));
}

function deleteFolder(event) {
  const folder = event.target.parentElement.parentElement;
  folderList.removeChild(folder);
  folders = folders.filter(
    (folderItem) => folderItem.id !== parseInt(folder.id)
  );
  saveFoldernames();
}

function paintFolders(newFolder) {
  const folder = document.createElement("li");
  folder.classList.add("folder");
  folder.id = newFolder.id;
  const title = document.createElement("div");
  const span = document.createElement("span");
  span.innerText = newFolder.text;
  const button = document.createElement("button");
  button.innerText = "remove";
  button.addEventListener("click", deleteFolder);
  title.appendChild(span);
  title.appendChild(button);
  const content = document.createElement("div");
  content.classList.add("content");
  content.innerText = newFolder.content;
  folder.appendChild(title);
  folder.appendChild(content);
  folderList.appendChild(folder);
}

function handleFolderSubmit(event) {
  event.preventDefault();
  const newFolder = folderInput.value;
  folderInput.value = "";
  const newFolderObj = {
    text: newFolder,
    content: "",
    id: Date.now(),
  };
  folders.push(newFolderObj);
  paintFolders(newFolderObj);
  saveFoldernames();
}

folderForm.addEventListener("submit", handleFolderSubmit);

const savedFolders = localStorage.getItem(FOLDERNAME_KEY);

if (savedFolders !== null) {
  const parsedFolders = JSON.parse(savedFolders);
  folders = parsedFolders;
  parsedFolders.forEach(paintFolders);
}
