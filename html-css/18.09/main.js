gToDoList = [
  {
    id: makeId(),
    task: "homework",
    isDone: false,
  },
];
function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

// CREATE
const elForm = document.querySelector("form");
elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const taskValue = elForm.querySelector("#task").value;

  createToDo(taskValue);
  elForm.reset();
});

function createToDo(task) {
  const newToDo = {
    id: makeId(),
    task: task,
    isDone: false,
  };

  gToDoList.push(newToDo);
  const elToDoList = document.getElementById("toDoList");
  elToDoList.innerHTML = "";
  renderToDoList();
}

// read
function renderToDoList() {
  const elToDoList = document.getElementById("toDoList");

  for (let i = 0; i < gToDoList.length; i++) {
    const toDo = gToDoList[i];
    const elToDo = document.createElement("li");
    elToDo.setAttribute("id", "el-" + toDo.id);

    elToDo.innerHTML = `<div><span onclick="updateIsDone('${toDo.id}')">${toDo.task}</span>
    <button onclick="deleteToDo('${toDo.id}')">Delete</button></div>`;

    elToDoList.appendChild(elToDo);
    elToDo.addEventListener("click", () => {
      if (toDo.isDone === true) {
        elToDo.classList.toggle("completed");
      }
    });
  }
}
renderToDoList();
// update\

function updateIsDone(toDoId) {
  console.log("work");
  for (let i = 0; i < gToDoList.length; i++) {
    const ToDo = gToDoList[i];
    if (ToDo.id === toDoId) {
      if (ToDo.isDone === false) {
        ToDo.isDone = true;
      } else {
        ToDo.isDone = false;
      }
    }

    console.log(ToDo);
  }
}

// delete
function deleteToDo(toDoId) {
  const newToDoList = [];

  for (let i = 0; i < gToDoList.length; i++) {
    const ToDo = gToDoList[i];

    if (ToDo.id !== toDoId) {
      newToDoList.push(ToDo);
    }
  }
  gToDoList = newToDoList;
  console.log(gToDoList);

  const elToDoList = document.getElementById("toDoList");

  const elToDoDelete = elToDoList.querySelector("#el-" + toDoId);
  elToDoList.removeChild(elToDoDelete);
  renderStudentList();
}

function selectItem(selectedItem) {
  // selectedItem.classList.toggle("selected");

  //

  // itemList.querySelector(".selected")?.classList.remove("selected");

  const currentSelectedItem = itemList.querySelector(".selected");
  if (currentSelectedItem === selectedItem) {
    selectedItem.classList.toggle("selected");
  } else {
    currentSelectedItem?.classList.remove("selected");
    selectedItem.classList.add("selected");
  }
}
