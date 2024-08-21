function addition(x, y) {
  let sum = 0;
  return (sum = x + y);
}
console.log(addition(5, 10));

function subtraction(x, y) {
  let sum = 0;
  return (sum = x - y);
}
console.log(subtraction(10, 5));

function multipcation(x, y) {
  let sum = 0;
  return (sum = x * y);
}
console.log(multipcation(5, 5));

function division(x, y) {
  let sum = 0;
  if (y === 0) {
    sum = "invalid number you can't division by zero";
  } else {
    sum = x / y;
  }
  return sum;
}
console.log(division(5, 10));

function power(x, y) {
  return Math.pow(x, y);
}
console.log(power(8, 2));

function square(x) {
  return Math.sqrt(x);
}
console.log(square(64));

function absolute(x) {
  return Math.abs(x);
}
console.log(absolute(-99));

function selection(x, o, y) {
  if (o === "+") {
    return addition(x, y);
  } else if (o === "-") {
    return subtraction(x, y);
  } else if (o === "*") {
    return multipcation(x, y);
  } else if (o === "/") {
    return division(x, y);
  } else if (o === "power by") {
    return power(x, y);
  } else if (o === "square of") {
    return square(x);
  } else if (o === "absolute value of") {
    return absolute(x);
  } else {
    return "invalid operation";
  }
}
console.log(selection(5, "+", 5));
console.log(selection(5, "-", 5));
console.log(selection(5, "*", 5));
console.log(selection(5, "/", 5));
console.log(selection(5, "power by", 5));
console.log(selection(64, "square of"));
console.log(selection(-5, "absolute value of"));
console.log(selection(5, "asa", 5));
