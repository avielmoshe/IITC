// 1
for (let i = 1; i < 6; i++) {
  console.log(i);
}
// 2
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 3
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
// 4

for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 5
for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// 6
for (let i = 0; i < 16; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
// 7
for (let i = 1; i < 21; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// 8
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 9
for (let i = 10; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 10
for (let i = 1; i < 21; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
//   11
text = "*";
for (let i = 1; i <= 5; i++) {
  console.log(text.repeat(i));
}
// 12
text = "hello";

for (let i = 1; i <= 3; i++) {
  console.log(text.repeat(3));
}
//   13
for (let i = 1; i < 4; i++) {
  console.log(i + "!");
}
// 14
for (let i = "A".charCodeAt(0); i <= "E".charCodeAt(0); i++) {
  console.log(String.fromCharCode(i));
}
// 15
let sum = "";
for (let i = 1; i <= 4; i++) {
  sum += "2 ";
}
console.log(sum);

//   16
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 17
arr = ["a", "b", "c", "d"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 18
arr = [10, 20, 30, 40, 50];
for (let i = arr.length; i > 0; i--) {
  console.log(arr[i]);
}
// 19
arr = [1, 2, 3, 4, 5, 6];
for (let i = 1; i < arr.length; i++) {
  if (i % 2 !== 0) {
    console.log(arr[i]);
  }
}
// 20
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("Color: " + colors[i]);
}
// 21;
sum=0;
for(i=1;i<6;i++){
  sum+=i
}
console.log(sum);
// 22
let product =1
for(i=1;i<6;i++){
  product+=i
}
console.log(product);

// 23
let count = 0;
 arr = [1, 2, 3, 4, 5, 6, 7, 8];
 for(let i=0;i<=arr.length;i++){
  if(i%2===0){
  count++}
 }
 console.log(count);
//  24
arr = [10, 5, 8, 12, 3];
let largest = arr[0];
for(let i=0;i<arr.length;i++){
  if(largest<=arr[i]){largest=arr[i]}
  else {largest=largest}
}
console.log(largest);
// 25 
count=0;
arr = [1, 2, 3, 4, 5, 6, 7, 8];
for(let i=0;i<=arr.length;i++){
 if(i%2!==0){
 count++}
}
console.log(count);