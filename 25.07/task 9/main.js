// 1
function lengthIs(word) {
  console.log(word.length);
}
lengthIs("avielavielaviel");
//   2
function convertToUpperCase(word) {
  console.log(word.toUpperCase());
}

convertToUpperCase("aviel");
//   3
function convertTolowerCase(word) {
  console.log(word.toLowerCase());
}

convertTolowerCase("AVIEL");
//   4
function specified(word, num) {
  console.log(word[num]);
}
specified("aviel", 4);
// 5
function Extracting(word, num, num_2) {
  console.log(console.log(word.substring(num, num_2)));
}
Extracting("AVIEL", 2, 4);
// 6

// 7
function remove(word) {
  console.log(word.trim(""));
}
remove("    aviel moshe   ");
// 8
function start(name, Isstartwith) {
  console.log(name.startsWith(Isstartwith));
}
start("aviel moshe", "aviel");
// 9
function end(name, Isendwith) {
  console.log(name.endsWith(Isendwith));
}
end("aviel moshe", "moshe");
// 10
function position(word, char) {
  console.log(word.indexOf(char));
}
position("aviel", "a");
// 11
function split(word) {
  console.log(word.split(" "));
}
split("aviel moshe");
// 12
function re(text, num) {
  console.log(text.repeat(num));
}
re("welcome to IITC", 8);
// 13
function Content(Name, Name_2) {
  console.log(Name + Name_2);
}
Content("aviel", " moshe");
// 14
function pad(text, length) {
  console.log(text.padStart(length, "*"));
}
pad("5", 5);
// 15
function ext(word, char) {
  console.log(word.slice(1));
}
ext("aviel", "a");
// 16
function repla(text, replace) {
  console.log(text.replace("school", "IITC"));
}
repla("we learn in school");
// 17
function inc(word, includes) {
  console.log(word.includes(includes));
}
inc("aviel moshe", "moshe");

// 18
function last(word) {
  let length = word.length;
  console.log(word[length - 1]);
}
last("aviel");
// 19
function check(word) {
  console.log(`is the string empty ${word === ""}`);
}
check("");
// 20
function portion(text, num) {
  console.log(text.slice(num));
}
portion("welcome to IITC", 7);
