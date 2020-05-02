let inputField = document.getElementById("todo");
let submitBtn = document.getElementById("submit-btn");

let filterCompleteBtn = document.getElementById("filter_completed");
filterCompleteBtn.addEventListener("click", displayCompletedTodos);

let filterIncompleteBtn = document.getElementById("filter_incomplete");
let allBtn = document.getElementById("all");
let todoList = document.getElementById("todolist");

submitBtn.addEventListener("click", addTodo);

let arr = [];

function addTodo() {
  let userInput = inputField.value;
  if (userInput === "") {
    alert("Your input field is empty , please enter a valid input");
  } else {
    let todoData = {
      todoText: userInput,
      isCompleted: false,
    };
    arr.push(todoData);
    inputField.value = ""; // to empty the input field
    displayTodo(arr);
  }
}
function displayCompletedTodos() {
  let completedTodos = arr.filter((todo) => todo.isCompleted == true);
  displayTodo(completedTodos);
}

function filterInCompleteTodo() {
  let inCompleteTodos = arr.filter((todo) => todo.isCompleted == false);
  displayTodo(inCompleteTodos);
}
filterIncompleteBtn.addEventListener("click", filterInCompleteTodo);

function showAllTodos() {
  displayTodo(arr);
}
allBtn.addEventListener("click", showAllTodos);

function editTodo(i) {
  let editValue = prompt("edit todo");
  arr[i].todoText = editValue;
  displayTodo(arr);
}

function deleteTodo(i) {
  arr.splice(i, 1);
  displayTodo(arr);
}

const createListItem = () => document.createElement("li");

const createDiv = () => {
  const displayAllDiv = document.createElement("div");
  displayAllDiv.classList.add("todoStyle");
  return displayAllDiv;
};

const createCheckBox = () => {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  return checkBox;
};

const createParagraph = () => document.createElement("p");

const createEditButton = () => {
  const editButton = document.createElement("button");
  editButton.innerHTML = '<i class="far fa-edit"></i>';
  return editButton;
};

const createDeleteButton = () => {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  return deleteButton;
};

function displayTodo(todoArray) {
  // clearing the div where all todos are displayed so that previous values are not repeated
  todoList.innerHTML = "";

  for (let i = 0; i < todoArray.length; i++) {
    let listItem = createListItem();

    let div = createDiv();

    listItem.appendChild(div);

    let checkBox = createCheckBox();

    checkBox.checked = todoArray[i].isCompleted;
    checkBox.addEventListener("change", () => {
      todoArray[i].isCompleted = !todoArray[i].isCompleted;
    });

    div.appendChild(checkBox);

    let paragraph = createParagraph();
    paragraph.innerHTML = todoArray[i].todoText;

    div.appendChild(paragraph);
    let editButton = createEditButton();
    editButton.classList.add("editIcon");
    div.appendChild(editButton);
    editButton.addEventListener("click", () => {
      editTodo(i);
    });

    let deleteButton = createDeleteButton();
    deleteButton.classList.add("deleteIcon");
    div.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      deleteTodo(i);
    });

    todoList.appendChild(listItem);
  }
}
