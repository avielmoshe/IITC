// 1
for (i = 1; i <= 20; i++) {
  console.log(i);
}

// 2
for (i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log("odd num " + i);
  }
}

// 3

let valid = 5;
do {
  validNum = Number(prompt("enter num between 1-10"));
} while (validNum !== valid);

// 4
let sum = 0;
for (i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 5
for (i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("Blast off!");

// 6
let first = 0;
let second = 1;
sum = 0;
for (i = 0; i < 10; i++) {
  console.log(first);
  sum = first + second;
  first = second;
  second = sum;
}

// 7

let x = 0;
do {
  x = Math.floor(Math.random() * 6 + 1);
  console.log(x);
} while (x !== 3);

// 8
for (i = 1; i <= 10; i++) {
  console.log(i * 7);
}
// 9

let num = 1001;

while (num % 3 !== 0 || num % 7 !== 0) {
  num++;
}

console.log(num);

// 10

let before = 1;
sum = 0;
let times = Number(prompt("factorial"));
for (let i = 1; i <= times; i++) {
  console.log(before);
  sum = before * i;
  before = sum;
}

// 11

let choose;
let rightGue = 7;
do {
  let choose = Number(prompt("guess number between 1-20"));
  if (choose > rightGue) {
    choose = alert("lower");
  } else if (choose < rightGue) {
    choose = alert("higher");
  } else alert("correct number!");
} while (rightGue === choose);

// // 12

let isNum = Number(prompt("enter num that you want to know if it prime"));
for (let i = 0; i < isNum; i++) {
  if (isNum % i !== 0 && isNum % isNum === 0) {
    alert("the number " + isNum + " is prime");
  } else {
    alert(`the number is not a prime`);
  }
}

// 13

let convertTo = Number(prompt("enter num to convert to binary"));
sum = "";
while (convertTo !== 0) {
  if (convertTo % 2 === 0) {
    sum += "0";
  } else {
    sum += "1";
  }
  convertTo = Math.floor(convertTo / 2);
}
console.log(sum);

// 14

let ok;
let text;
for (let i = 1; i <= 5; i++) {
  ok = i;
  text = ok.toString();
  console.log(text.repeat(i));
}

// 15
sum = 0;
let input;
do {
  input = prompt('enter number or type "0000" and see result');
  sum = sum + Number(input);
} while (input !== "0000");
alert(`the total is ${sum}`);

16;

// 17

// 18
let number10 = Number(prompt("enter number of times tou want to sequence 2"));
for (i = 1; i <= number10; i++) {
  console.log(2 ** i);
}

// 19
let coin;
sum = 0;
do {
  coin = Math.floor(Math.random() * 2 + 1);
  if (coin === 2) {
    coin = "heads";
  } else {
    coin = "pali";
  }
  console.log(coin);
  if (coin === "heads") {
    sum++;
  } else sum = 0;
} while (sum !== 3);

// 20

sum = 0;
let number_10 = Number(prompt("enter squares of numbers from 1 to n"));
for (i = 1; i <= number_10; i++) {
  sum = sum + i ** 2;
}
alert(sum);

// 21

let exceedsValue = 22;
sum = 0;
i = 1;
while (sum <= exceedsValue) {
  i++;
  sum += i;
}
console.log(i);
// 22

// 23
guess = 0;
rightGuessIs = 17;
do {
  guess = Math.floor(Math.random() * 20);
  console.log(guess);
} while (guess !== rightGuessIs);

// 24
sum = 0;
let n = 9;
for (i = 1; i <= n; i++) {
  sum += 1 / i;
}
console.log(sum);

// 25
n = 11;
let oddOrEven = 0;
while (n !== 1) {
  oddOrEven = n % 2 === 0;
  if (oddOrEven === true) {
    n = n / 2;
  } else n = n * 3 + 1;
  console.log(n);
}
