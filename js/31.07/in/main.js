let person = {
  firsName: "aviel",
  lastName: "moshe",
  age: 21,
  city: "bear yakov",
  favoriteClub: "MACCAB HAIFA",
  isStudent: true,
};

let personKeys = Object.keys(person);
for (let i = 0; i < personKeys.length; i++) {
  console.log(personKeys[i] + " :" + person[personKeys[i]]);
}
// }                                           כמו person.i

let personValues = Object.values([person]);

let car = {
  make: "BMW",
  model: "X5",
  year: 2023,
  printdetails: function () {
    console.log(this.make, this.model, this.year, this.color);
  },
};
console.log(car.model);
car.year = 2024;
car.color = "green";
car.printdetails();

let carKeys = Object.keys(car);
for (let i = 0; i < carKeys.length; i++) {
  if (carKeys[i] !== "printdetails") {
    console.log(carKeys[i] + " :" + car[carKeys[i]]);
  }
}
