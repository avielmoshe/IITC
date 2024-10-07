import { utils } from "./utils.js";
const USER_TRANSACTIONS_KEY = "userTransactions";
const PIN_CODE_KEY = "pinCode";
const BALANCE_KEY = "balance";

let pinCode = utils.getFromStorage(PIN_CODE_KEY);
let balance = utils.getFromStorage(BALANCE_KEY);
const userTransactions = utils.getFromStorage(USER_TRANSACTIONS_KEY);
let counter = 0;
const pinCodeForm = document.getElementById("pin-code");
const buttonsEl = document.getElementById("btnAction");
const btnExit = document.getElementById("Exit");
const loginDiv = document.getElementById("login");
const divContainer = document.querySelector(".container");
const containers = divContainer.querySelectorAll("div");
const userBalanceEl = document.querySelector("#userBalance");
const lastTransactionEl = document.querySelector("#lastTransactionP");
const WithdrawForm = document.getElementById("WithdrawForm");
const isWithdrawSucceeded = document.getElementById("isWithdrawSucceeded");
const isDepositSucceeded = document.getElementById("isDepositSucceeded");
const depositForm = document.getElementById("depositForm");
const isPinCodeChange = document.getElementById("isPinCodeChange");
const changePinCodeForm = document.getElementById("changePinCodeForm");

function checkPinCode(event) {
  event.preventDefault();
  let currentPin = event.target[0].value;
  if (counter < 3) {
    if (pinCode === currentPin) {
      buttonsEl.classList.remove("hidden");
      btnExit.classList.remove("hidden");
      loginDiv.classList.add("hidden");
      alert("successfully connected");
    } else counter++;
  } else alert("Account blocked");
  pinCodeForm.reset();
}
function exitAccount() {
  buttonsEl.classList.add("hidden");
  btnExit.classList.add("hidden");
  loginDiv.classList.remove("hidden");
  containers.forEach((container) => {
    container.classList.add("hidden");
  });
}
function renderBalance() {
  userBalanceEl.textContent = `Your balance is: ${balance}$`;
  userTransactions.type = "Check balance";
  userTransactions.amount = balance;
  utils.saveToStorage(USER_TRANSACTIONS_KEY, userTransactions);
}
function LastTransaction() {
  lastTransactionEl.textContent = `Your last transaction is: ${userTransactions.type} of ${userTransactions.amount}$`;
}
function WithdrawFromBalance(event) {
  event.preventDefault();
  let amountOfWithdraw = event.target[0].value;
  WithdrawForm.reset();
  if (amountOfWithdraw <= balance) {
    balance = balance - amountOfWithdraw;
    isWithdrawSucceeded.textContent = `last action:You have successfully withdrawn from the account ${amountOfWithdraw}$`;
    userTransactions.type = "Withdraw";
    userTransactions.amount = amountOfWithdraw;
    utils.saveToStorage(USER_TRANSACTIONS_KEY, userTransactions);
    utils.saveToStorage(BALANCE_KEY, balance);
  } else {
    isWithdrawSucceeded.textContent = `last action:Operation failed Unable to withdraw more than balance, your current balance is ${balance}$`;
  }
}
function depositToBalance(event) {
  event.preventDefault();
  let amountOfDeposit = event.target[0].value;
  depositForm.reset();
  balance = balance + Number(amountOfDeposit);
  userTransactions.type = "Deposit";
  userTransactions.amount = amountOfDeposit;
  isDepositSucceeded.textContent = `last action:You have successfully deposit to your account ${amountOfDeposit}$`;
  utils.saveToStorage(USER_TRANSACTIONS_KEY, userTransactions);
  utils.saveToStorage(BALANCE_KEY, balance);
}
function updatePinCode(event) {
  event.preventDefault();
  let oldPinCode = event.target[0].value;
  let newPinCode = event.target[1].value;
  changePinCodeForm.reset();
  if (oldPinCode === pinCode) {
    pinCode = newPinCode;
    isPinCodeChange.textContent = `last action:your new pin code is updated`;
  } else
    isPinCodeChange.textContent = `last action:your Old code is wrong try again`;
  utils.saveToStorage(USER_TRANSACTIONS_KEY, userTransactions);
  utils.saveToStorage(PIN_CODE_KEY, pinCode);
}
export const atmService = {
  checkPinCode,
  exitAccount,
  renderBalance,
  LastTransaction,
  WithdrawFromBalance,
  depositToBalance,
  updatePinCode,
};
