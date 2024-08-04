let students = [
  { id: "1", name: "omer", grade: 100 },
  { id: "2", name: "avi", grade: 40 },
  { id: "3", name: "gaga", grade: 80 },
];
// 1
function getValuesFromKey(arr, key) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][key]);
  }
  return newArr;
}
console.log(getValuesFromKey(students, "name"));
4;

// 2
function getPassStudents(arr, grade) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].grade > grade) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(getPassStudents(students, 70));

// 3
let names = ["yossi", "liraz", "baba"];
function createPersons(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newPerson = {};
    newPerson.id = i;
    newPerson.name = arr[i];
    newArr.push(newPerson);
  }
  return newArr;
}
console.log(createPersons(names));
