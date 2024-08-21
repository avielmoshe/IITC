// 1
let fruits = ["apple", "watermelon", "banana"];
console.log(fruits);
// 2
fruits.push("mango");
console.log(fruits);
// 3
fruits.pop();
console.log(fruits);
// 4
let number = [1, 2, 3, 4, 5];
console.log(number[2]);
// 5
fruits[1] = "kiwi";
console.log(fruits);
// 6
let colors = [];
colors.push("red", "green", "blue", "red", "red");
console.log(colors);
// 7
colors.shift();
console.log(colors);
// 8
colors.unshift("yellow");
console.log(colors);
// 9
let Num = [2, 4, 5, 8, 10, 26];
let sum = 0;
for (i = 0; i < Num.length; i++) {
  sum += Num[i];
}
console.log(sum);
// 10
console.log(colors.indexOf("green"));
// 11\
let num = [1, 2, 3, 8, 5, 6];
let biger = num[0];
for (i = 0; i < num.length; i++) {
  if (num[i] > biger) {
    biger = num[i];
  }
}
console.log(biger);
// 12
let fruits_2 = fruits.slice(1, 3);
console.log(fruits_2);
// 13
let number_2 = [1, 2.3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
result = number_2.filter(evenOdd);
console.log(result);
function evenOdd(number_2) {
  return number_2 % 2 === 0;
}
// 14
console.log(colors.join());
// 15
console.log(colors.concat(fruits));
// 16
console.log(fruits.reverse());
// 17
let name = ["aviel", "batel", "yovel", "eliana"];
let greeting = name.map(greet);
console.log(greeting);
function greet(name) {
  return "hello " + name;
}
// 18
let number_3 = [1, 2.3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(number_3.every(great));
function great(number_3) {
  return number_3 > 0;
}
// 19
const firstNumberGreaterThanTen = number_2.find((number_2) => number_2 > 10);
console.log(firstNumberGreaterThanTen);
// 20
console.log(fruits.some(hasbanana));

function hasbanana(fruits) {
  if (fruits === "banana") {
    return true;
  } else return false;
}
// 21
console.log(number_2.reduce(red));
sum = 0;
function red(number_3) {
  return (sum += number_3);
}
// 22
let squares = [];
for (i = 1; i <= 10; i++) {
  let num = i * i;
  squares.push(num);
}
console.log(squares);
// 23

// 24
console.log(colors.includes("red"));
// 25
let words = ["aviel", "batel", "eliana", "eli"];
let Leters = words.filter(lengthAA);
console.log( Leters);
function lengthAA(words) {
  let numLength = words.length;
  return numLength >= 5;
}

// const tac = [
//   [, , ],
//   [, , ],
//   [, , ]
// ];
// while (i>)