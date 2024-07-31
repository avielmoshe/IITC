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
// 2

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

//3

function sumInArray(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    count += num[i];
  }
  console.log(count);
}

let numbers = [1, 2, 3, 4];
sumInArray(numbers);

// 4

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

// 5

function makeMultTable() {
  for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
      row += i * j + " ";
    }
    console.log(row);
  }
}

makeMultTable();
// 6

function searchInArray(array_2D, target) {
  let row;
  let col;
  for (let i = 0; i < array_2D.length; i++) {
    for (let j = 0; j < array_2D[i].length; j++) {
      if (array_2D[i][j] === target) {
        row = i;
        col = j;
      }
    }
  }
  console.log(`(${row},${col})`);
}

let test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
searchInArray(test, 9);
// 7
// Exercise 4: Count Vowels and Consonants
// Objective: Write a program to count the number of vowels and consonants in a given string.
// Instructions:
// Take a string as input.
// Use a loop to iterate over each character in the string.
// Use another loop (or a set of conditions) to check if the character is a vowel or consonant.
// Keep a count of vowels and consonants.
// for simplicity,string should contain only letters.
// Example Output:
// For input = "hello", output: Vowels: 2, Consonants: 3
// For input = "world", output: Vowels: 1, Consonants: 4

function sumOfVowelsConsonants(text) {
  let vowels = 0;
  let Consonants = 0;
  for (i = 0; i < text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "o" ||
      text[i] === "u" ||
      text[i] === "i"
    ) {
      vowels++;
    } else {
      Consonants++;
    }
  }
  console.log(
    `in ${text} you have ${vowels} vowels and ${Consonants} Consonants`
  );
}

let word = "hello";
sumOfVowelsConsonants(word);

// Exercise 5: Reverse a String
// Objective: Write a program that reverses a given string using nested loops.
// Instructions:
// Take a string as input.
// Use a loop to iterate over each character in the string.
// Use a nested loop to reverse the string by iterating from the end to the beginning.
// Example Output:
// For input = "hello", output: olleh
// For input = "world", output: dlrow

function convert(text) {
  let reverseIs = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverseIs += text[i];
  }
  console.log(reverseIs);
}

word = "hello";
convert(word);

// Exercise 6: Number Pyramid
// Objective: Create a program that prints a number pyramid.
// Instructions:
// Use nested loops to print a pyramid of numbers.
// The outer loop should iterate through the number of rows (e.g., 5).
// The inner loop should print numbers from 1 up to the current row number.
// Example Output:
// 1
// 12
// 123
// 1234
// 12345

function numberPyramid(num) {
  let sum = "";
  for (let i = 1; i <= num; i++) {
    sum += i.toString();
    console.log(sum);
  }
}
number_1 = 5;
numberPyramid(5);

// Exercise 7: Sum of 2D Array Elements
// Objective: Calculate the sum of all elements in a 2D array.
// Instructions:
// Create a 2D array with numbers.
// Use nested loops to iterate over each element.
// Sum all the elements and print the total.
// Example Output:
// For arr = [[1, 2], [3, 4], [5, 6]], output: Sum: 21

function sumOfArray(sumof) {
  let sum = 0;
  for (let i = 0; i < sumof.length; i++) {
    for (let j = 0; j < sumof[i].length; j++) {
      sum += sumof[i][j];
    }
  }
  console.log(sum);
}
arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
sumOfArray(arr);

// Exercise 8: Character Frequency
// Objective: Write a program to find the frequency of each character in a string.
// Instructions:
// Take a string as input.
// Use nested loops to count the frequency of each character.
// Print each character and its frequency.
// Example Output:
// For input = "hello", output: h: 1, e: 1, l: 2, o: 1

function countChar(str, char) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (char === str[i]) {
      count++;
    }
  }
  return console.log(char + ":", count);
}

function sumOfChar(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string[i].length; j++) {
      countChar(string[i], string[i][j]);
    }
  }
}

word = "hello";
sumOfChar(word);

// Exercise 9: Flatten a 2D Array
// Objective: Convert a 2D array into a 1D array.
// Instructions:
// Create a 2D array with some numbers.
// Use nested loops to iterate over each element.
// Store all elements in a new 1D array and print the result.
// Example Output:
// For arr = [[1, 2], [3, 4], [5, 6]], output: [1, 2, 3, 4, 5, 6]

function newArray(array_2D) {
  let arr_2 = [];
  for (let i = 0; i < array_2D.length; i++) {
    for (let j = 0; j < array_2D[i].length; j++) {
      arr_2.push(array_2D[i][j]);
    }
  }
  console.log(arr_2);
}

arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

newArray(arr);

// Exercise 10: Matrix Transpose
// Objective: Transpose a given matrix.
// Instructions:
// Create a 2D array representing a matrix.
// Use nested loops to switch the rows and columns of the matrix.
// Print the transposed matrix.
// Example Output:
// For matrix = [[1, 2, 3], [4, 5, 6]], output: [[1, 4], [2, 5], [3, 6]]

function rowsAndColumns(arr) {
  let arr_2 = [];
  for (let i = 0; i < arr[0].length; i++) {
    let arr_3 = [];
    for (let j = 0; j < arr.length; j++) {
      arr_3.push(arr[j][i]);
    }
    arr_2.push(arr_3);
  }
  console.log(arr_2);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
rowsAndColumns(matrix);

// Exercise 11: Palindrome Check
// Objective: Check if a given string is a palindrome.
// Instructions:
// Take a string as input.
// Use nested loops to compare characters from the beginning and end of the string.
// Print whether the string is a palindrome.
// Example Output:
// For input = "radar", output: Palindrome
// For input = "hello", output: Not a palindrome

function isPalindrome(text) {
  let reverseIs = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverseIs += text[i];
  }
  if (reverseIs === text) {
    console.log("the word is Palindrome");
  } else {
    console.log("the word is Not a palindrome");
  }
}
word = "radar";
isPalindrome(word);

//  Exercise 12: Find Common Elements in Two Arrays
// Objective: Find common elements between two arrays.
// Instructions:
// Create two arrays with numbers.
// Use nested loops to find and print the common elements.
// Example Output:
// For arr1 = [1, 2, 3, 4] and arr2 = [3, 4, 5, 6], output: Common elements: 3, 4

function commonElements(arr_1, arr_2) {
  let common = "";
  for (i = 0; i < arr_1.length; i++) {
    for (j = 0; j < arr_2.length; j++) {
      if (arr_1[i] === arr_2[j]) {
        common += arr_2[j] + " ,";
      }
    }
  }
  console.log(`Common elements: ${common}`);
}

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 4, 5, 3];
commonElements(arr1, arr2);

// Exercise 13: Check for Prime Numbers in a Range
// Objective: Write a program to find all prime numbers in a given range.
// Instructions:
// Take a range (start and end) as input.
// Use nested loops to check each number in the range.
// Print the prime numbers found.
// Example Output:
// For range = (10, 20), output: Prime numbers: 11, 13, 17, 19

function isPalindrome(start, End) {
  let prime = "";
  for (let i = start; i < End; i++) {
    if (i === 2) {
      prime += i + " ";
    } else if (i % 2 !== 0 && i > 1 && i % 3 !== 0 && i % 5 !== 0) {
      prime += i + " ";
    }
  }
  console.log(prime);
}

let str = 0;
let end = 20;
isPalindrome(str, end);

// Exercise 14: Sort a 2D Array by Row Sum
// Objective: Sort the rows of a 2D array based on the sum of their elements.
// Instructions:
// Create a 2D array with numbers.
// Use nested loops to calculate the sum of each row.
// Sort the rows based on their sum and print the sorted array.
// Example Output:
// For arr = [[3, 1, 2], [1, 4, 5], [2, 3, 1]], output: [[2, 3, 1], [3, 1, 2], [1, 4, 5]]

function sumArr(arr_2) {
  sum = 0;
  for (i = 0; i < arr_2.length; i++) {
    sum += arr_2[i];
  }
  return sum;
}

function sortBySum(arr_1) {
  for (let i = 0; i < arr_1.length; i++) {
    for (let j = 0; j < arr_1.length; j++) {
      if (sumArr(arr_1[i]) <sumArr(arr_1[j])) {
        let temp=arr_1[j]
        arr_1[j]=arr_1[i]
        arr_1[i]=temp
      } 
    }
  }
  console.log(arr_1);
}

arr = [
  [3, 1, 2],
  [1, 4, 5],
  [2, 3, 2],
];
sortBySum(arr);
