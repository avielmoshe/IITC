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
