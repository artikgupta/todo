let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", addTodo);

let arr = [];

function addTodo() {
  let inputField = document.getElementById("todo");
  let userInput = inputField.value;
  let todoData = {
    todoText: userInput,
    isCompleted: false,
  };
  arr.push(todoData);
  inputField.value = "";
  displayTodo();
}

function displayTodo() {
  let todoList = document.getElementById("todolist");
  todoList.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement("li");

    let div = document.createElement("div");
    listItem.appendChild(div);

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    div.appendChild(checkBox);

    let paragraph = document.createElement("p");
    paragraph.innerHTML = arr[i].todoText;

    div.appendChild(paragraph);

    todoList.appendChild(listItem);
  }
}
