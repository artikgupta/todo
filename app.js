let submitBtn = document.getElementById("submit-btn");
let filterCompleteBtn = document.getElementById("filter_completed");

submitBtn.addEventListener("click", addTodo);

let arr = [];

function addTodo() {
  let inputField = document.getElementById("todo");
  let userInput = inputField.value;
  if (userInput === "") {
    alert("Your input field is empty , please enter a valid input");
  } else {
    let todoData = {
      todoText: userInput,
      isCompleted: false,
    };
    arr.push(todoData);
    inputField.value = "";
    displayTodo(arr);
  }
}
function editTodo(i) {
  let editValue = prompt("edit todo");
  arr[i].todoText = editValue;
  displayTodo(arr);
}

function deleteTodo(i) {
  arr.splice(i, 1);
  // console.log(arr);
  displayTodo(arr);
}

function filterCompletedTodo() {
  let completedTodos = arr.filter((todo) => todo.isCompleted == true);
  console.log(completedTodos);
  displayTodo(completedTodos);
}
filterCompleteBtn.addEventListener("click", filterCompletedTodo);

function displayTodo(todoArray) {
  let todoList = document.getElementById("todolist");
  todoList.innerHTML = "";

  for (let i = 0; i < todoArray.length; i++) {
    let listItem = document.createElement("li");

    let div = document.createElement("div");
    div.classList.add("todoStyle");
    listItem.appendChild(div);

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todoArray[i].isCompleted;
    checkBox.addEventListener("change", () => {
      todoArray[i].isCompleted = !todoArray[i].isCompleted;
      // console.log(arr);
    });

    div.appendChild(checkBox);

    let paragraph = document.createElement("p");
    paragraph.innerHTML = todoArray[i].todoText;
    // console.log(arr[i]);
    // paragraph.innerHTML = arr[i].editValue;
    // edit line 54
    div.appendChild(paragraph);

    let writeButton = document.createElement("button");
    writeButton.classList.add("writeIcon");
    writeButton.innerHTML = '<i class="far fa-edit"></i>';
    div.appendChild(writeButton);
    writeButton.addEventListener("click", () => {
      editTodo(i);
    });

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    div.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      deleteTodo(i);
    });

    todoList.appendChild(listItem);
  }
}
