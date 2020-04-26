let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", addTodo);

let arr = [];

function addTodo() {
  let inputField = document.getElementById("todo");
  let userInput = inputField.value;
  if (userInput === "") {
    alert("Your input field is empty , please enter a valid input");
  }
  let todoData = {
    todoText: userInput,
    isCompleted: false,
  };
  arr.push(todoData);
  inputField.value = "";
  displayTodo();
}

function deleteTodo(i) {
  arr.splice(i, 1);
  console.log(arr);
  displayTodo();
}

function displayTodo() {
  let todoList = document.getElementById("todolist");
  todoList.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement("li");

    let div = document.createElement("div");
    div.classList.add("todoStyle");
    listItem.appendChild(div);

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", () => {
      arr[i].isCompleted = !arr[i].isCompleted;
      console.log(arr);
    });

    div.appendChild(checkBox);

    let paragraph = document.createElement("p");
    paragraph.innerHTML = arr[i].todoText;

    div.appendChild(paragraph);

    let writeButton = document.createElement("button");
    writeButton.innerHTML = '<i class="far fa-edit"></i>';
    div.appendChild(writeButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    div.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      deleteTodo(i);
    });

    todoList.appendChild(listItem);
  }
}
