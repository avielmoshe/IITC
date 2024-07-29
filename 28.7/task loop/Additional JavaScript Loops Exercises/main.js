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
// let valid = 5;
// do {
//  validNum = Number(prompt("enter num between 1-10"));
// } while (validNum !== valid);
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
for (i = 1; i <= times; i++) {
  console.log(before);
  sum = before * i;
  before = sum;
}
// 11
let choose;
let rightGue = 8;
do {
  let choose = Number(prompt("guess number between 1-20"));
  if (choose > rightGue) {
    choose = alert("lower");
  } else if (choose < rightGue) {
    choose = alert("higher");
  } else alert("correct number!");
} while (rightGue !== choose);
