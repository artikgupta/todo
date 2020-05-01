let submitBtn = document.getElementById("submit-btn");
let filterCompleteBtn = document.getElementById("filter_completed");
let filterIncompleteBtn = document.getElementById("filter_incomplete");
let all = document.getElementById("all");

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
function filterCompletedTodo() {
  let completedTodos = arr.filter((todo) => todo.isCompleted == true);
  console.log(completedTodos);
  displayTodo(completedTodos);
}
filterCompleteBtn.addEventListener("click", filterCompletedTodo);

function filterInCompleteTodo() {
  let inCompleteTodos = arr.filter((todo) => todo.isCompleted == false);
  console.log(inCompleteTodos);
  displayTodo(inCompleteTodos);
}
filterIncompleteBtn.addEventListener("click", filterInCompleteTodo);

function All() {
  let all = arr;
  console.log(all);
  displayTodo(all);
}
all.addEventListener("click", All);

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
    div.appendChild(paragraph);

    // another div for keeping edit and delete icon
    // let diveditanddel = document.createElement("div");
    // diveditanddel.classList.add("put_in_one");
    // div.append(diveditanddel);
    // divedanddel.append(writeButton);
    // divedanddel.append(deleteButton);

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
