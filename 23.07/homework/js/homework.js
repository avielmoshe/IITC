// task 1
let firstName = "aviel";
console.log(`firstname: ${firstName}`);

let lastName = "moshe";
console.log(`lastname: ${lastName}`);

let age = 17;
console.log(`age: ${age}`);

let isStudent = true;
console.log(`is he student: ${isStudent}`);

let isAdult = age > 18 === true;
console.log(isAdult);
let isJohn = (firstName === "john") === true;
console.log(isJohn);

// task 2

function greet(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  let fullName_2 = fullName.toUpperCase();
  console.log(`Hello, ${fullName_2}! Welcome to the IITC Bootcamp.`);
}

greet(firstName, lastName);

// task 3
function checkAge(age) {
  if (age < 13) console.log("You are a child.");
  else if (13 < age && age <= 17) console.log("You are a teenager.");
  else if (17 < age && age <= 64) console.log("You are an adult.");
  else console.log("You are a senior.");
}
checkAge(21);

function getDayMessage(dayOfWeek) {
  switch (dayOfWeek) {
    case "Monday":
      console.log("Start of the work week!");
    // break;
    case "Tuesday":
      console.log("Start of the work week!");
      break;
    case "Wednesday":
      console.log("Start of the work week!");
      break;
    case "Thursday":
      console.log("Start of the work week!");
      break;
    case "Friday":
      console.log("Start of the work week!");
      break;
    case "Saturday":
      console.log("Start of the work week!");
      break;
    case "Sunday":
      console.log("Start of the work week!");
      break;
    default:
      console.log("Start of the work week!");
  }
}
getDayMessage();

// task 4
function checkEligibility(age, isStudent) {
  if (age < 18 && isStudent) {
    console.log("You are a minor student.");
  } else if (age < 18 && !isStudent) {
    console.log("You are a minor non-student.");
  } else if (age > 18 && age < 24 && isStudent) {
    console.log("You are a young adult student.");
  } else if (age > 18 && age < 24 && !isStudent) {
    console.log("You are a young adult non-student.");
  } else if (age >= 25 && isStudent) {
    console.log("You are an adult student.");
  } else if (age >= 25 && !isStudent) {
    console.log("You are an adult non-student.");
  }
}

checkEligibility(age, isStudent);
//task 5
function formatNam(name) {
  let withTrim = name.trim();
  let lower = withTrim.toLowerCase();
  if (lower === "admin") {
    console.log("Welcom, Admin!");
  } else {
    console.log(`Hello,${lower}`);
  }
}
formatNam("    ADMIN   ");
formatNam("    AVIEL   ");

//TASK 6

function checkDiscount(age, isMeber) {
  if (age < 18) {
    if (isMeber) {
      return "You get a 20% discount.";
    } else {
      return "You get a 10% discount.";
    }
  } else if (age >= 65) {
    if (isMeber) {
      return "You get a 30% discount.";
    } else {
      return "You get a 20% discount.";
    }
  } else {
    if (isMeber) {
      return "You get a 10% discount.";
    } else {
      return "No discount available.";
    }
  }
}
let finalDiscount = checkDiscount(69, true);
console.log(finalDiscount);

//task 7

function validateLogin(username, password) {
  let storedUsername = "Aviel123";
  let storedPassword = "123Aviel";
  if (storedUsername === username && storedPassword === password) {
    return "Login succlessful.";
  } else {
    return "Invalid username or password.";
  }
}
let result = validateLogin("Aviel123", "123Aviel");
console.log(result);
//task 8
