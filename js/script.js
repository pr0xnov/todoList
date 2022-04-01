const inputBox = document.querySelector(".todo__app-input");
const addBtn = document.querySelector(".todo__app-button-plus");
const todoList = document.querySelector(".todo__app-list");
const deleteAllBtn = document.querySelector(".todo__app-footer-button");

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};

addBtn.onclick = () => {
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem("Your task");
  if (getLocalStorage === null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(userData);
  localStorage.setItem("Your task", JSON.stringify(listArr));
  showTasks();
};

function showTasks() {
  let getLocalStorage = localStorage.getItem("Your task");
  if (getLocalStorage === null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  const tasks = document.querySelector(".todo__tasks");
  tasks.textContent = listArr.length;
  let newListTag = "";
  listArr.forEach((element, index) => {
    newListTag += `<li class="todo__app-items">
    ${element} <span onClick="deleteTask(${index})"><i class="fa fa-trash"></i></span>
  </li>`;
  });
  todoList.innerHTML = newListTag;
  inputBox.value = "";
}

function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("Your task");
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1);
  localStorage.setItem("Your task", JSON.stringify(listArr));
  showTasks();
}

deleteAllBtn.onclick = () => {
  listArr = [];
  localStorage.setItem("Your task", JSON.stringify(listArr));
  showTasks();
};
