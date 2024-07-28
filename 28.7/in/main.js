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
text = "*";
for (let i = 1; i <= 5; i++) {
  console.log(text.repeat(i));
}

// 2
let num = 1;
while (num <= 100) {
  console.log(num);
  num = num * 2;
}
// 1 do while
num = 1;

do {
  console.log(num);
  i++;
} while (i <= 5);
// 3

let doyou;
let dont = "no";
do {
  doyou = prompt("Do you want to play agin?");
} while (doyou !== dont);
