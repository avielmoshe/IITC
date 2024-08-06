// 1
let fruits = [];
// 2
let numbers = [1, 2, 3, 4, 5];
// 3
let colors = ["red", "green", "blue"];
// 4
let mixed = ["red", 2, "green", 4];
// 5
let seasons = ["summer", "fall", "winter", "spring"];
// 6
console.log(numbers.length);
// 7
let emptyCheck = [];
if (emptyCheck.length <= 0) {
  console.log("empty array");
} else {
  console.log("not empty");
}
// 8
let dynamic = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(dynamic.length);
// 9
dynamic.push(10);
console.log(dynamic.length);
// 10
dynamic.shift();
console.log(dynamic.length);
// 11
console.log(colors[0]);
// 12
let x = seasons.length - 1;
console.log(seasons[x]);
// 13
let y = numbers.length;
let z = y / 2;
x = Math.floor(z);
console.log(numbers[x]);
// 14
console.log(fruits[10]);
// 15
console.log(`The second color is ${colors[1]}`);
// 16
fruits[0] = "apple";
// 17
numbers[numbers.length - 1] = 10;
console.log(numbers);
// 18
console.log(numbers[2] * 2);
// 19
for (let i = 0; i < colors.length; i++) {
  colors[i] = colors[i].toUpperCase();
}
console.log(colors);
// 20
console.log(seasons);
let t;
t = seasons[0];
seasons[0] = seasons[seasons.length - 1];
seasons[seasons.length - 1] = t;
console.log(seasons);
// 21
fruits.push("orenge");
// 22
console.log(numbers);
numbers.pop();
console.log(numbers);
// 23
colors.push("yellow", "purpule", "pink");
console.log(colors);
// 24
let number_22 = [];
for (let i = 1; i <= 5; i++) {
  number_22.push(i);
}
console.log(number_22);
// 25
for (let i = 0; number_22.length > 0; i++) {
  number_22.pop();
}
console.log(number_22);
// 26
fruits.unshift("mango");
console.log(fruits);
// 27
numbers.shift();
console.log(numbers);
// 28
numbers.unshift(3, 5, 7);
console.log(numbers);
// 29
for (i = 5; i > 0; i--) {
  number_22.unshift(i);
}
console.log(number_22);
// 30
for (i = 0; number_22.length > 0; i++) {
  number_22.shift();
  number_22.length;
}
console.log(number_22);
// 31
console.log(colors);
console.log(colors.indexOf("GREEN"));
// 32
console.log(seasons.indexOf("winter"));
// 33
colors.push("RED");
console.log(colors.lastIndexOf("RED"));
// 34
let duplicate = [1, 2, 3, 4, 5, 6, 3, 7, 8, 9];
console.log(duplicate.indexOf(3));
console.log(duplicate.lastIndexOf(3));
// 35
console.log(duplicate.indexOf(3) !== -1);
// 36
console.log(fruits.includes("apple"));
// 37
console.log(numbers.includes(10));
// 39
console.log(colors.includes("BLUE")); // 39
function check(numbers) {
  return numbers.includes(3);
}
console.log(check(numbers));
// 40
if (numbers.includes(3)) {
  console.log("the number 3 includs in 'numbers'");
} else {
  {
    console.log("the number 3 not includs in 'numbers'");
  }
}
// 41
console.log(numbers.slice(0, 3));
// 42
console.log(numbers.slice(numbers.length - 3));
// 43
console.log(numbers.slice(0, 1), numbers.slice(2, 3));
// 44
console.log(numbers.slice());
// 45
x = numbers.length;
z = Math.floor(x / 2);
console.log(numbers.slice(z, z + 1));
// 46
console.log(fruits);
console.log(fruits.splice(1, 1));
// 47
console.log(numbers.splice(2, 4, 5, 5));
// 48
console.log(colors.splice(0, 2, "blue", "blue"));
// 49
console.log(numbers.splice(0, 2, 5, 10));
//50
console.log(numbers.splice(0, 2, 5, 10));
// 51
let fruitsColor = fruits.concat(colors);
console.log(fruitsColor);
// 52
let three = fruitsColor.concat(numbers);
console.log(three);
// 53
console.log(three.concat("pink"));
// 54
let four = three.concat(three);
console.log(four);
// 55
let five = three.concat(three);
console.log(four);
// 56
console.log(fruits.join());
// 57
console.log(numbers.join());
// 58
let somearray;
function join(somearray) {
  return somearray.join();
}
console.log(join(numbers));
// 59
let word = ["hi", " ", "my", " ", "name", " ", "is", " ", "aviel"];
console.log(join(word));
// 60
x = word.reverse();
console.log(x.join());
// 61
console.log(seasons.reverse());
// 62
let text;
function isPalindrome(text) {
  let lowerCaseWord = text.toLowerCase();
  let charactersArray = lowerCaseWord.split("");
  let reversedArray = charactersArray.reverse();
  let reversedWord = reversedArray.join("");
}
console.log(isPalindrome("mom"));
// 63
numbers = numbers.reverse();
console.log(numbers.map(Math.sqrt));
// 64
text = "aviel";
myArray = text.split("");
console.log(myArray.reverse());
//  65
function reverseArray(arr) {
  let reversedArray = [];
  while (arr.length > 0) {
    let element = arr.pop();
    reversedArray.push(element);
  }

  return reversedArray;
}
console.log(colors);
console.log(reverseArray(colors));
// 66
fruits[2] = "aviel";
console.log(fruits);
console.log(fruits.sort());
// 67
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);
// 68
console.log(
  numbers.sort(function (a, b) {
    return b - a;
  })
);
// 69
let words = ["aviel", "roei", "batel", "rafi"];
a = words.length;
console.log(words.sort());
// 70

// 71
function printColor(color) {
  console.log(color);
}

colors.forEach(printColor);
// 72
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function double(num) {
  console.log(num * 2);
}

numbers.forEach(double);





















// 73
function exs(item, index,arr){
  item=arr[0]
if(item===arr[index]){return arr[index]}
}
console.log(numbers.forEach(exs));
               























// 81
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.filter(even);
function even(num) {
  return num % 2 === 0;
}
console.log(numbers.filter(even));
// 82
fruits = ["apple", "orenge", "banana", "watermelon"];
fruits.filter(check);
function check(len) {
  return len.length > 5;
}
console.log(fruits.filter(check));
// 84
let arr_7 = [0, false, "false", "0", true, 1];
function fal(ind) {
  return ind !== false && ind !== 0 && ind !== NaN;
}
console.log(arr_7.filter(fal));
// 85
function isWord(word) {
  return word.includes("apple");
}

console.log(fruits.filter(isWord));

// 96
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
function sumOf(total, num) {
  return (total += num);
}
console.log(numbers.reduce(sumOf, 0));
// 97
fruits = ["apple", "orenge", "banana", "watermelon"];

// function longest(total,num){
//   if(total.length>num.length){return total}
//   else{total=num}
// }
// console.log(fruits.reduce(longest));
