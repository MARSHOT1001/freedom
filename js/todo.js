class ToDoApp {
  constructor() {
    this.toDoForm = document.getElementById("todo-form");
    this.toDoInput = this.toDoForm.querySelector("#todo-form input");
    this.toDoList = document.getElementById("todo-list");
    this.TODOS_KEY = "todos";
    this.toDos = [];

    this.toDoForm.addEventListener("submit", this.handleToDoSubmit.bind(this));
  }

  saveToDos() {
    localStorage.setItem(this.TODOS_KEY, JSON.stringify(this.toDos));
  }

  deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    this.toDos = this.toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    this.saveToDos();
  }

  paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", this.deleteToDo.bind(this));
    li.appendChild(span);
    li.appendChild(button);
    this.toDoList.appendChild(li);
  }

  handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = this.toDoInput.value;
    this.toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    this.toDos.push(newTodoObj);
    this.paintToDo(newTodoObj);
    this.saveToDos();
  }

  loadSavedToDos() {
    const savedToDos = localStorage.getItem(this.TODOS_KEY);

    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      this.toDos = parsedToDos;
      parsedToDos.forEach(this.paintToDo.bind(this));
    }
  }
}

const toDoApp = new ToDoApp();
toDoApp.loadSavedToDos();
