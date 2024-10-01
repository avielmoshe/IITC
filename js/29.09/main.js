// 1
const array = [1, 2, 3, 4, 5];
array.forEach(function (num) {
  console.log(num);
});
// 2
array.forEach(function (num) {
  console.log(num * 2);
});
// 3
const newArray = [];
array.forEach(function (num) {
  newArray.push(num ** 2);
});
console.log(newArray);
// 4
let sum = 0;
array.forEach(function (num) {
  sum += num;
});
console.log(sum);
// 5
let strIs = "";
const strArray = ["Hello", " ", "World", "!"];
strArray.forEach(function (str) {
  strIs += str;
});
console.log(strIs);

// 6
// const arrayAfterMap = array.map(function (num) {
//   return num * 2;
// });
// console.log(arrayAfterMap);

let arrayAfterMap = array.map((num) => num * 2);
console.log(arrayAfterMap);
// 7
const arrayFood = ["apple", "banana", "lemon"];
arrayAfterMap = arrayFood.map((str) => str.length);
console.log(arrayAfterMap);
// 8
const numbers = [1, 4, 9, 16, 25];
console.log(numbers.map((num) => Math.sqrt(num)));
// 9
const uper = ["hello", "world"];
console.log(uper.map((str) => str.toUpperCase()));
// 10
const bool = [true, false, true];
console.log(bool.map((item) => !item));
// 11
const evenIs = [1, 2, 3, 4, 5, 6];
console.log(evenIs.filter((num) => 0 === num % 2));
// 12
const fruit = ["תפוח", "בננה", "דובדבן", "תמר", "אלדרברי"];
console.log(fruit.filter((str) => str.length > 5));
// 13
const numbers2 = [5, 10, 15, 20, 25];
console.log(numbers2.filter((num) => num > 10));
// 14
const fruit2 = ["תפוח", "בננה", "תפוז", "דובדבן"];
console.log(fruit2.filter((str) => str[0].includes("ת")));
// 15
console.log(evenIs.filter((num) => 0 === num % 2));
// 16
console.log(array.reduce((total, num) => (total += num)));
// 17
console.log(array.reduce((total, num) => total * num));
// 18
console.log(
  numbers2.reduce(function (biger, num) {
    if (biger < num) {
      biger = num;
    }
    return biger;
  })
);
// 19

console.log(strArray.reduce((first, str) => (first += str)));
// 20

// 21
console.log(array.some((num) => num > 3));
// 22
const even = [2, 4, 6, 8, 10];
console.log(even.every((num) => num % 2 === 0));
// 23
console.log(fruit.some((str) => str.length > 6));
// 24

// 25
console.log(bool.some((str) => str));
// 26
console.log(array.find((num) => num > 3));
// 27
console.log(evenIs.findIndex((num) => num % 2 === 0));
// 28
console.log(fruit2.find((str) => str.length > 5));
// 29
console.log(fruit2.findIndex((str) => (str = "דובדבן")));
// 30
const neg = [1, 2, 3, -1, -2, -3];
console.log(neg.find((num) => num < 0));
// 31
const order = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(order.sort((a, b) => a - b));
// 32
console.log(fruit.sort());
// 33
console.log(order.sort((a, b) => b - a));
// 34
console.log(fruit.sort((a, b) => a.length - b.length));
// 35
const user = [
  { name: "יוחנן", age: 25 },
  { name: "יעל", age: 30 },
  { name: "בועז", age: 20 },
];
console.log(user.sort((a, b) => a.age - b.age));
// 36
const exFlat = [1, [2, 3], [4, [5, 6]]];
console.log(exFlat.flat(2));
// 37
const nestedArray1 = [1, [2, [3, [4]]]];
console.log(nestedArray1.flat(2));
// 38
const arrayWithHoles = [1, 2, , 4, 5];
console.log(arrayWithHoles.flat());
// 39
const nestedArray = ["א", ["ב", "ג"], "ד"];
console.log(nestedArray.flat());
// 40
const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
console.log(deeplyNestedArray.flat(Infinity));
// 41
