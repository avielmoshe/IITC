function countChar(str, char) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (char === str[i]) {
      count++;
    }
  }
  console.log(`in ${str} has ${char}: ${count} times`);
}
countChar("hello", "l");

count = 0;

function countCharInArray(strs, char) {
  count = 0;
  for (let i = 0; i < strs.length; i++) {
    let currentElement = strs[i];
    for (let j = 0; j < currentElement.length; j++) {
      if (char === currentElement[j]) {
        count++;
      }
    }
  }
  console.log(count);
}
let names = ["sasha", "omer", "sason", "shai"];
countCharInArray(names, "a");

function sumInArray(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    count += num[i];
  }
  console.log(count);
}

let numbers = [1, 2, 3, 4];
sumInArray(numbers);

function sumNestedNumbersArray(NestedNumbers) {
  let sum = 0;
  for (let i = 0; i < NestedNumbers.length; i++) {
    for (let j = 0; j < NestedNumbers[i].length; j++) {
      sum += NestedNumbers[i][j];
    }
  }
  console.log(sum);
}

let nestedArry = [[5, 2], [3, 20, 10], [1]];
sumNestedNumbersArray(nestedArry);

function makeMultTable() {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
      row += i * j + " ";
    }
    console.log(row);
  }
}

makeMultTable();
