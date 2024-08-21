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

// 4
/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/
let employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

function groupBy(array, key) {
  let group = {};
  for (let i = 0; i < array.length; i++) {
    if (group[array[i][key]] === undefined) {
      group[array[i][key]] = [];
    }
    group[array[i][key]].push(array[i]);
  }
  return group;
}
console.log(groupBy(employees, "department"));

/*
{
  Engineering: [
    { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
  ],
  Marketing: [
    { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
    { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
    { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
  ]
}
*/
