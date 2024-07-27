// 1
let age = 30;
let canVote;
if (age >= 18) {
  canVote = true;
} else {
  canVote = false;
}
console.log(canVote);
// 2
let temperature = 28;
let weather;
if (temperature < 0) {
  weather = "freezing";
} else {
  weather = "not freezing";
}
console.log(weather);
// 3
let score = 65;
let result;
if (score >= 60) {
  result = "pass";
} else {
  result = "fail";
}
console.log(result);
// 4
let grade = 95;
let letterGrade;
if (grade >= 90) {
  letterGrade = "A";
} else if (grade >= 80) {
  letterGrade = "B";
} else {
  letterGrade = "C";
}
console.log(letterGrade);
//   5
let number = 22;
let isEven;
if (number % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}
console.log(isEven);
//6
let year = 2024;
let isLeapYear;
if (year % 4 === 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}
console.log(isLeapYear);
//7
let hour = 11;
let period;
if (hour > 12) {
  period = "PM";
} else {
  period = "AM";
}
console.log(period);
// 8
let dayNumber = 3;
let dayName;
if (dayNumber === 1) {
  dayName = "Monday";
} else if (dayNumber === 2) {
  dayName = "Tuesday";
} else if (dayNumber === 3) {
  dayName = "Wednesday";
} else if (dayNumber === 4) {
  dayName = "Thursday";
} else if (dayNumber === 5) {
  dayName = "Friday";
} else if (dayNumber === 6) {
  dayName = "Saturday";
} else {
  dayName = "Sunday";
}
console.log(dayName);
// 9
let name = "aviel";
let hasName;
if (name === "") {
  hasName = false;
} else {
  hasName = true;
}
console.log(hasName);
// 10
let amount = 1001;
let shipping;
if (amount > 1000) {
  shipping = 0;
} else {
  shipping = 5;
}
console.log(shipping);
// 11
let password = "secret123";
let isLoggedIn;
if ((password = "secret123")) {
  isLoggedIn = true;
} else {
  isLoggedIn = false;
}
console.log(isLoggedIn);
// 12
let month = 5;
let season;
if (3 < month && month < 6) {
  season = "spring";
} else if (5 < month && month < 9) {
  season = "summer";
} else if (8 < month && month < 12) {
  season = "fall";
} else {
  season = "winter";
}
console.log(season);
//13
let income = 60000;
let creditScore = 800;
let loanApproved;
if (income >= 50000 && creditScore >= 700) {
  loanApproved = true;
} else {
  loanApproved = false;
}
console.log(loanApproved);
// 14
//i already set the age age=30
let discount;
if (age <= 18 || age >= 65) {
  discount = 0.2;
} else {
  discount = 0;
}
console.log(discount);
// 15
let NumBer = 5;
let inRange;
if (1 <= NumBer && NumBer <= 10) {
  inRange = true;
} else {
  inRange = false;
}
console.log(inRange);
// 16
let dayNum = 7;
let dayNa;
switch (dayNum) {
  case 7:
    dayNa = "Sunday";
    break;
  case 1:
    dayNa = "Monday";
    break;
  case 2:
    dayNa = "Tuesday";
    break;
  case 3:
    dayNa = "Wednesday";
    break;
  case 4:
    dayNa = "Thursday";
    break;
  case 5:
    dayNa = "Saturday";
    break;
  case 6:
    dayNa = "Friday";
    break;
  default:
    dayNa = "invalid day number";
}
// 17
console.log(dayNa);
let Grade = "A";
switch (Grade) {
  case "A":
    console.log("you got " + Grade + " Excellent!");
    break;
  case "B":
    console.log("you got " + Grade + " very good");
    break;
  case "C":
    console.log("you got " + Grade + " good");
    break;
  case "D":
    console.log("you got " + Grade + " less good");
    break;
  default:
    console.log("you got " + Grade + " bad");
}
// 18
let Num = -52;
let sign;
if (Num > 0) {
  sign = "positive";
} else if (Num < 0) {
  sign = "negative";
} else {
  sign = "zero";
}

console.log(sign);
// 19
let Year = 2000;
let isCenturyLeapYear;
if (Year % 100 === 0 && Year % 400 === 0) {
  isCenturyLeapYear = true;
} else {
  isCenturyLeapYear = false;
}
console.log(isCenturyLeapYear);
// 20
let MONTH = 7;
let daysInMonth;
switch (MONTH) {
  case 1:
    daysInMonth = 31;
    break;
  case 2:
    daysInMonth = 28;
    break;
  case 3:
    daysInMonth = 31;
    break;
  case 4:
    daysInMonth = 30;
    break;
  case 5:
    daysInMonth = 31;
    break;
  case 6:
    daysInMonth = 30;
    break;
  case 7:
    daysInMonth = 31;
    break;
  case 8:
    daysInMonth = 31;
    break;
  case 9:
    daysInMonth = 30;
    break;
  case 10:
    daysInMonth = 31;
    break;
  case 11:
    daysInMonth = 30;
    break;
  default:
    daysInMonth = 31;
}
console.log(daysInMonth);

// 21
number = 22;
let parity;
if (number > 0) {
  if (number % 2 === 0) {
    (sign = "positive"), (parity = "even");
  } else {
    (sign = "positive"), (parity = "odd");
  }
} else if (number < 0) {
  if (number % 2 === 0) {
    (sign = "negative"), (parity = "even");
  } else {
    (sign = "negative"), (parity = "odd");
  }
} else {
  sign = "zero";
}
console.log(`the number is ${sign} and ${parity}`);
// 22
let attendance = 70;
score = "A";
let GraDe;
if (attendance < 80) {
  if (score === "A") {
    GraDe = "B";
  } else if (score === "B") {
    GraDe = "C";
  } else if (score === "C") {
    GraDe = "D";
  } else {
    GraDe = "F";
  }
} else {
  GraDe = score;
}
console.log(GraDe);
// 23
Year = 2000;
let LeapYear;
if (Year % 4 === 0 && Year % 400 === 0) {
  LeapYear = true;
} else {
  LeapYear = false;
}
console.log(`is the year is leap ${LeapYear}`);
// 24
age = 55;
let isEmployed = true;
if (age > 18 && age < 67) {
  if (isEmployed) {
    console.log("Employed Adult");
  } else {
    console.log("Unemployed Adult");
  }
} else if (age <= 18) {
  console.log("Student");
} else {
  console.log("Retiree");
}
// 25
month = 5;
let seasonIs;
switch (month) {
  case (12, 1, 2, 3):
    seasonIs = "winter";
    break;
  case (4, 5):
    seasonIs = "spring";
    break;
  case (6, 7, 8):
    seasonIs = "summer";
    break;
  case (9, 10, 11):
    seasonIs = "fall";
    break;
  default:
    seasonIs = "invalid month";
}
console.log(seasonIs);
// 26
let x = -5;
let y = 10;
let theQuadrantIs;
if (y > 0 && x > 0) {
  theQuadrantIs = 1;
} else if (y > 0 && x < 0) {
  theQuadrantIs = 2;
} else if (y < 0 && x > 0) {
  theQuadrantIs = 3;
} else if (y < 0 && x < 0) {
  theQuadrantIs = 4;
} else {
  theQuadrantIs = "invalid x or y";
}
console.log("the Quadrant Is " + theQuadrantIs);
// 27
let temperatureOf = 101;
let state;
if (temperatureOf >= 100) {
  state = "gas";
} else if (temperatureOf >= 0) {
  state = "liquid";
} else {
  state = "solid";
}
console.log(state);
// 28

month = 2;
Year = 2025;
isLeapYear = year;
isLeapYear = year % 4 === 0;

if (isLeapYear === true) {
  isLeapYear = "true";
} else {
  isLeapYear = "false";
}

switch ((month, isLeapYear)) {
  case 1:
    daysInMonth = 31;
  case (2, "true"):
    daysInMonth = 29;
    break;
  case (2, "false"):
    daysInMonth = 28;

    break;
  case 3:
    daysInMonth = 31;
    break;
  case 4:
    daysInMonth = 30;
    break;
  case 5:
    daysInMonth = 31;
    break;
  case 6:
    daysInMonth = 30;
    break;
  case 7:
    daysInMonth = 31;
    break;
  case 8:
    daysInMonth = 31;
    break;
  case 9:
    daysInMonth = 30;
    break;
  case 10:
    daysInMonth = 31;
    break;
  case 11:
    daysInMonth = 30;
    break;
  default:
    daysInMonth = 31;
}
console.log(daysInMonth);
// 29
let a = 5;
let b = 7;
let c = 10;
let canForm;
if (a + b > c && c + a > b && b + c > a) {
  canForm = "can form triangle";
} else {
  canForm = "cant form triangle";
}
console.log(canForm);
// 30
a = 1;
b = 2;
c = 2;
let equation = b * b - 4 * a * c;
let numOfRoots;
if (equation > 0) {
  numOfRoots = "two real roots";
} else if (equation === 0) {
  numOfRoots = "one real root";
} else {
  numOfRoots = "no real roots";
}
console.log(numOfRoots);
// 31
number = 22;
if (number % 2 === 0) {
  parity = "even";
} else {
  parity = "odd";
}
console.log(parity);
// 32
age = 30;
canVote;
if (age >= 18) {
  canVote = true;
} else {
  canVote = false;
}
console.log(canVote);
