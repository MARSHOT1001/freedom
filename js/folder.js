const sidebar = document.querySelector(".sidebar");
const folder = document.getElementById("create-folder");

const FOLDERNAME_KEY = "Create a Folder";

function folderCreator(event) {
  event.preventDefault();
  const foldername = folder.value;
  localStorage.setItem(FOLDERNAME_KEY, foldername);
  paintGreetings(foldername);
}
