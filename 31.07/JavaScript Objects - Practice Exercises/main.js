// 1
let person = {
  firsName: "aviel",
  lastName: "moshe",
  age: 21,
  city: "bear yakov",
  favoriteClub: "MACCAB HAIFA",
  isStudent: true,
};
console.log(person.age);
console.log(person.isStudent);
person.isStudent = false;
console.log(person.isStudent);
//   2
let car = {
  make: "BMW",
  model: "X5",
  year: 2023,
};
console.log(car.make, car.model);
console.log((car.year = 2024));

//   3
let fruit = {
  color: "yellow",
  name: "banana",
  sweetness: 6,
};
console.log(fruit.name, fruit.sweetness);
console.log((fruit.color = "green"));

//4
let book = {
  title: "IITC",
  author: "omer mazig",
  pages: 345,
};
console.log(book.title, book.author);
console.log(book.pages + 50);
// 5
let animal = {
  species: "dog",
  sound: "bark",
  isWild: false,
};
console.log(animal.species, animal.sound);
console.log((animal.isWild = true));
// 6
let smartPhone = {
  brand: "iphone",
  model: "14 pro max",
  storageGB: 128,
};
console.log(smartPhone.brand, smartPhone.storageGB);
console.log((smartPhone.model = "15 pro max"));
// 7
let recipe = {
  name: "cake",
  ingredients: ["milk", "flour", "egg", "sugar"],
  preparationTime: 60,
};
console.log(recipe.name, recipe.ingredients[0]);
recipe.ingredients.push("water");
console.log(recipe.ingredients);
// 8
let movie = {
  title: "deadpool",
  director: "aviel moshe",
  releaseYear: 2024,
};
console.log(movie.title, movie.director);
console.log((movie.releaseYear = 2025));

//  9
let country = {
  name: "israel",
  capital: "jerusalem",
  population: 10000000,
};
console.log(country.name, country.capital);
console.log(country.population + 1000000);
//  10
let computer = {
  brand: "lenovo",
  CPU: "i7",
  RAMinGB: 16,
};
console.log(computer.brand, computer.CPU);
console.log(computer.RAMinGB * 2);
