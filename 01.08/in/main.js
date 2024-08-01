let house = " ";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    house += ` ${j * i}`;
  }
  house += "\n";
}
console.log(house);

// Exercise 8: Character Frequency
// Objective: Write a program to find the frequency of each character in a string.
// Instructions:
// Take a string as input.
// Use nested loops to count the frequency of each character.
// Print each character and its frequency.
// Example Output:
// For input = "hello", output: h: 1, e: 1, l: 2, o: 1

function countFreq(str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    if (!freq[str[i]]) {
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
          if (!freq[str[i]]) {
            freq[str[i]] = 1;
          } else {
            freq[str[i]]++;
          }
        }
      }
    }
  }
  console.log(freq);
}
countFreq("hello");
