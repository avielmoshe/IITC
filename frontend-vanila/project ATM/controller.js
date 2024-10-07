import { atmService } from "./atm.service.js";

const pinCodeForm = document.getElementById("pin-code");
const btnBalance = document.getElementById("balance");
const btnLastTransaction = document.getElementById("lastTransaction");
const navElement = document.querySelector("#choose-action");
const btnNodeList = navElement.querySelectorAll("button");
const WithdrawForm = document.getElementById("WithdrawForm");
const depositForm = document.getElementById("depositForm");
const changePinCodeForm = document.getElementById("changePinCodeForm");
const btnExit = document.getElementById("Exit");
const divContainer = document.querySelector(".container");
const containers = divContainer.querySelectorAll("div");

WithdrawForm.addEventListener("submit", function (event) {
  atmService.WithdrawFromBalance(event);
});
depositForm.addEventListener("submit", function (event) {
  atmService.depositToBalance(event);
});
changePinCodeForm.addEventListener("submit", function (event) {
  atmService.updatePinCode(event);
});
pinCodeForm.addEventListener("submit", function (event) {
  atmService.checkPinCode(event);
});
btnBalance.addEventListener("click", atmService.renderBalance);

btnLastTransaction.addEventListener("click", () => {
  atmService.LastTransaction();
});
btnExit.addEventListener("click", atmService.exitAccount);
btnNodeList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    containers.forEach((container) => {
      container.classList.add("hidden");
    });

    const currentEl = document.querySelector(`#${e.target.id}El`);

    currentEl.classList.toggle("hidden");
  });
});
