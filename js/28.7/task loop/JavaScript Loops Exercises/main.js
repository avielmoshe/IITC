// 1
for (let i = 10; i > 0; i--) {
  console.log(i);
}
// 2
for (let i = 2; i < 21; i += 2) {
  console.log(i);
}
// 3
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// 4
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}
// 5
text = "*";
for (let i = 1; i <= 5; i++) {
  console.log(text.repeat(i));
}
// 'while' Loop Exercises
// 1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// 2
let num = 1;
while (num <= 100) {
  console.log(num);
  num = num * 2;
}

//3
i = 20;
while (i >= 0) {
  console.log(i);
  i--;
}
// 4
let correct = "1234";
i = "";
while (i !== correct) {
  i = prompt("enter password");
}

// 5
let correctIs = 5;
let gusIs = 0;
while (gusIs !== correctIs) {
  gusIs = Math.floor(Math.random() * 10 + 1);
  console.log(gusIs);
}
// 1 do while
num = 1;

do {
  console.log(num);
  i++;
} while (i <= 5);

// 2

let doyou;
let dont = "no";
do {
  doyou = prompt("Do you want to play agin?");
} while (doyou !== dont);

// 3
correctIs = 6;
let rollIs = 0;
do {
  rollIs = Math.floor(Math.random() * 6 + 1);
  console.log(rollIs);
} while (rollIs !== correctIs);
// 4
i = 1;
do {
  i = i * 2;
  console.log(i);
} while (i <= 1000);
// 5
let name = [];
let answer;
do {
  name.push(answer);
  answer = prompt("enter name or type done");
} while (answer !== "done");
alert(name);
