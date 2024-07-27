// 1
function greet() {
  console.log("Hello world");
}
greet();
// 2
function square(number) {
  console.log(number * number);
}
square(5);
// 3
function isEven(number) {
  console.log(number % 2 === 0);
}
isEven(5);
// 4
function getFullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
getFullName("aviel", "moshe");
// 5
function sumTwo(number, number_2) {
  console.log(number + number_2);
}
sumTwo(5, 7);
// 6
function multiply(number, number_2) {
  console.log(number * number_2);
}
multiply(5, 7);
// 7
function greetPerson(name) {
  console.log(`Hello and welcome ${name}`);
}
greetPerson("aviel moshe");
// 8
function getAbsoluteValue(number) {
  if (number > 0) {
    console.log("positive");
  } else if (number < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
}
getAbsoluteValue(-5);
// 9
function calculateAverage(number, number_2) {
  console.log((number + number_2) / 2);
}
calculateAverage(5, 5);
// 10
function convertToUpperCase(word) {
  console.log(word.toUpperCase());
}

convertToUpperCase("aviel");
// 11
function isPositive(number) {
  if (number > 0) {
    console.log("positive");
  } else if (number < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
}
isPositive(-5);
// 12
function getFirstChar(char) {
  console.log(char[0]);
}
getFirstChar("aviel");
// 13
function areaOfRectangle(width, height) {
  console.log(width * height);
}
areaOfRectangle(10, 10);
// 14
function remainderDivision(number, number_2) {
  console.log(number % number_2);
}
remainderDivision(10, 12);
// 15
function logType(val) {
  console.log(typeof val);
}
logType("aviel");
// 16
function invertBoolean(trueORFalse) {
  console.log(!trueORFalse);
}
invertBoolean(false);
// 17
function concatenateStrings(word, word_2) {
  console.log(word + word_2);
}
concatenateStrings("avi", "el");
// 18
function findSmaller(number, number_2) {
  if (number > number_2) {
    console.log(number_2);
  } else if (number < number_2) {
    console.log(number);
  } else console.log("==");
}
findSmaller(10, 12);
// 19
function greetWithDefault(name) {
  if (name === "") {
    console.log(`Hello and welcome Guset`);
  } else {
    console.log(`Hello and welcome ${name}`);
  }
}
greetWithDefault("");
// 20
function isLongString(word) {
  let long = word.length;
  console.log(long > 10);
}
isLongString("avielavielaviel");
