// 1
let foods = ["pizza", "pasta", "hamburger", "falfel", "mango"];
console.log(foods);
// 2l
console.log(foods[2]);
// 3
foods[1] = "banna";
console.log(foods);
// 4
foods.push("pasta");
console.log(foods);
// 5
foods.shift();
console.log(foods);
// 6
for (i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}
// 7
console.log(foods.indexOf("banna"));
// 8
let sum = 0;
let number = [1, 3, 5, 7, 9, 11];
for (i = 0; i < number.length; i++) {
  sum += number[i];
}
console.log(sum);
