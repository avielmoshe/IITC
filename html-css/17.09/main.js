document.getElementById("content").style.backgroundColor = "lightBlue";
const items = document.querySelectorAll(".text");
for (let i = 0; i < items.length; i++) {
  items[i].style.color = "red";
}
const listIs = document.querySelectorAll("#list");
for (let i = 0; i < listIs.length; i++) {
  console.log(listIs[i].textContent);
}
const myBtn = document.querySelector("button");
function yellow() {
  for (let i = 0; i < listIs.length; i++) {
    listIs[i].style.backgroundColor = "yellow";
  }
}
myBtn.addEventListener("click", yellow);

// task 2

const listItem = document.querySelector(".list-item");
const butAdd = document.querySelector(".add");

function addItem() {
  let newLi = document.createElement("li");
  newLi.textContent = "new item";
  listItem.appendChild(newLi);
  newLi.addEventListener("click", function () {
    const items = listItem.querySelectorAll("li");

    for (let i = 0; i < items.length; i++) {
      console.log("click");
      items[i].classList.remove("selected");
    }
    newLi.classList.add("selected");
  });
}
butAdd.addEventListener("click", addItem);

function removeFirstItem() {
  listItem.removeChild(listItem.firstChild);
}
function removeLastItem() {
  listItem.removeChild(listItem.lastChild);
}

function removeSelectedItem() {
  const selectedItem = document.querySelector(".selected");
  listItem.removeChild(selectedItem);
}

const butRemoveFirst = document.querySelector(".remove-first-item");
butRemoveFirst.addEventListener("click", removeFirstItem);

const butRemoveLast = document.querySelector(".Remove-Last-Item");
butRemoveLast.addEventListener("click", removeLastItem);

const butRemoveSelectedItem = document.querySelector(".Remove-Selected-Item");
butRemoveSelectedItem.addEventListener("click", removeSelectedItem);

// task 3
const myInput = document.getElementById("name-input");
const greet = document.getElementById("greeting");
const butReset = document.getElementById("reset");

function nameGreeting() {
  let valueInput = "";
  valueInput = "Hello " + myInput.value;
  greet.textContent = valueInput;
}
function resetsInput() {
  console.log("click");

  valueInput = myInput.value = "";
  greet.textContent = valueInput;
}

myInput.addEventListener("input", nameGreeting);
butReset.addEventListener("click", resetsInput);

// task 4
const box = document.getElementById("box");
const ChangeStyleBut = document.getElementById("ChangeStyle");
const resetStyleBut = document.getElementById("resetStyle");
let h = 100;
let w = 100;
box.style.height = `${h}px`;
box.style.width = `${w}px`;
box.style.border = "3px solid black";
function ChangeStyle() {
  if (w < 300) {
    console.log("click");
    h = h * 2;
    w = w * 2;
    box.style.height = `${h}px`;
    box.style.width = `${w}px`;
    box.style.border = "3px solid black";
  } else {
    alert("you reach to the max width");
  }
}
function resetStyle() {
  h = 100;
  w = 100;
  box.style.height = `${h}px`;
  box.style.width = `${w}px`;
}

ChangeStyleBut.addEventListener("click", ChangeStyle);
resetStyleBut.addEventListener("click", resetStyle);
// task 5
function getAlert(x) {
  console.log(x);

  alert(`you click on button ${x}`);
}
const clickOneBut = document.querySelector(".one");
const clickTwoBut = document.querySelector(".two");
const clickThreeBut = document.querySelector(".three");
const clickFourBut = document.querySelector(".four");
const clickFiveBut = document.querySelector(".five");

clickOneBut.addEventListener("click", function () {
  getAlert(1);
});

clickTwoBut.addEventListener("click", function () {
  getAlert(2);
});

clickThreeBut.addEventListener("click", function () {
  getAlert(3);
});

clickFourBut.addEventListener("click", function () {
  getAlert(4);
});

clickFiveBut.addEventListener("click", function () {
  getAlert(5);
});
