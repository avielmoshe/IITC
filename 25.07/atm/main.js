let balance = 3000;
let pinCode = "5321";
const maxWithdrawal = 11000;
let conter = 0;

function verify(entrPin, pinCode) {
  if (entrPin === pinCode) {
    alert("the pin code is " + true);
  } else {
    while (entrPin !== pinCode) {
      conter++;
      if (conter < 4) {
        entrPin = prompt("the pin code is " + false + " enter pincode");
        verify(entrPin, pinCode);
      } else alert("account lock");
    }
  }
}

let entrPin = prompt("enter pincode");
verify(entrPin, pinCode);

function balanceIs(balance) {
  alert(`the balance is: ${balance}$`);
}
balanceIs(balance);

function withdrwal(maxWithdrawal, balance, amountof) {
  if (amountof <= 0) {
    amountof = prompt("invalid amount of withdrwal ,enter amount of withdrwal");
    withdrwal(maxWithdrawal, balance, amountof);
  } else if (amountof > maxWithdrawal) {
    amountof = prompt(
      "invalid amount of withdrwal you can't withdrawl above the max withdrwal, enter amount of withdrwal"
    );
    withdrwal(maxWithdrawal, balance, amountof);
  } else if (amountof > balance) {
    amountof = prompt(
      "invalid amount of withdrwal you can't withdrawl above your balance, enter amount of withdrwal"
    );
    withdrwal(maxWithdrawal, balance, amountof);
  } else
    alert(
      `you withdrwal from your account ${amountof}$ your new balance is ${
        balance - amountof
      }$ `
    );
}
let amountof = prompt("enter amount of withdrwal");
withdrwal(maxWithdrawal, balance, amountof);
if (amountof < balance && amountof < maxWithdrawal && amountof > 0) {
  balance -= amountof;
} else balance = balance;
console.log(balance);

// אני פה
function deposit(balance, amountofDe) {
  if (amountofDe <= 0) {
    amountofDe = Number(
      prompt("invalid amount of deposit, enter amount of deposit")
    );
    deposit(balance, amountofDe);
  } else
    alert(
      `you deposit to your account ${amountofDe}$ your new balance is ${
        balance + amountofDe
      }$ `
    );
}
let amountofDe = Number(prompt("enter amount of deposit"));
deposit(balance, amountofDe);
if (amountof > 0) {
  balance += amountofDe;
} else balance = balance;
console.log(balance);

// function mainAtm(
//   entrPin,
//   pinCode,
//   balance,
//   amountof,
//   amountofDe,
//   maxWithdrawal
// ) {
entrPin = Number(prompt("enter pincode"));

if (verify(entrPin, pinCode) === "the pin code is " + true);
{
  function mainAtm(
    entrPin,
    pinCode,
    balance,
    amountof,
    amountofDe,
    maxWithdrawal
  ) {
    let optionts = prompt(
      "enter your option-check balance,withdraw or deposit"
    );
    if (optionts === "check balance") {
      balanceIs(balance);
    } else if (optionts === "withdraw") {
      amountof = prompt("enter amount of withdrwal");
      withdrwal(maxWithdrawal, balance, amountof);
    } else if (optionts === "deposit") {
      amountofDe = Number(prompt("enter amount of deposit"));
      deposit(balance, amountofDe);
    } else {
      optionts = prompt(
        "invalid optionts, enter your option-check balance,withdraw or deposit"
      );
      mainAtm(entrPin, pinCode, balance, amountof, amountofDe, maxWithdrawal);
    }
  }
  mainAtm(entrPin, pinCode, balance, amountof, amountofDe, maxWithdrawal);
}
entrPin = Number(prompt("enter pincode"));
mainAtm(entrPin, pinCode, balance, amountof, amountofDe, maxWithdrawal);
