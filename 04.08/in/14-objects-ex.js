"use strict";
let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};
// TODO: Write a function to update the person's city
function updateCity(person, newCity) {
  person.address.city = newCity;
  // your code here
}

updateCity(person, "Los Angeles");
console.log("Updated Person:", person);

/////////////////////////////////////////////////////

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// TODO: Write a function to return an array of student names
function getStudentNames(students) {
  let names = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}

let names = getStudentNames(students);
console.log("Student Names:", names);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (id === students[i].id) {
      return students[i];
    }
  }
}

getStudentById(students, 2);
console.log("Found Student:", getStudentById(students, 2));

// TODO: Write a function to add a new student to the array
function addStudent(students, newStudent) {
  students.push(newStudent);
  return students;
}

addStudent(students, { id: 4, name: "Charlie", age: 19 });
console.log("Updated Students:", students);

/////////////////////////////////////////////////////

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

// TODO: Write a function to toggle the product's availability
function toggleAvailability(product) {
  return product.isAvailable;
}

console.log("Updated Product:", toggleAvailability(product));
// TODO: Write a function to update the product's price
function updatePrice(product, newPrice) {
  product.price = newPrice;
}

updatePrice(product, 1500);
console.log("Updated Product:", product);

// TODO: Write a function to remove a category from the product
function removeCategory(product, category) {
  product.categories.pop(category);
}

removeCategory(product, "tech");
console.log("Updated Product:", product);

/////////////////////////////////////////////////////

let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];
// TODO: Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
  let mostExpensive = products[0].price;
  let productName = "Laptop";
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > mostExpensive) {
      mostExpensive = products[i].price;
      productName = products[i].name;
    }
  }
  return productName;
}
let expensiveProduct = findMostExpensiveProduct(products);
console.log("Most Expensive Product:", expensiveProduct);

// TODO: Write a function to return an array of only available product sizes
function getAvailableSizes(product) {
  let getAvailableSizes = [];
  for (let i = 0; i < product.length; i++) {
    for (let j = 0; j < product[i].sizes.length; j++) {
      console.log(getAvailableSizes.includes(product[i].sizes[j]));
      if (getAvailableSizes.includes(product[i].sizes[j])) {
        getAvailableSizes.push(product[i].sizes[j]); //להוסיף אובייקט
      }
    }
  }
  console.log(getAvailableSizes);
}
getAvailableSizes(products);
// console.log("Available Sizes:", getAvailableSizes(products));

/////////////////////////////////////////////////////

let student = {
  name: "Alice",
  age: 20,
};

// TODO: Write a function to add a new property to the student object
function addProperty(student, key, value) {
  student[key] = value;
}

addProperty(student, "grade", "A");
console.log("Updated Student:", student);

/////////////////////////////////////////////////////

let school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

// TODO: Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {
  if (studentId === school.students[0].id) {
    return (school.students[0].grades[subject] = newGrade);
  } else if (studentId === school.students[1].id) {
    return (school.students[1].grades[subject] = newGrade);
  } else {
    return console.log("wrong id");
  }
}

updateStudentGrade(school, 1, "math", 90);
console.log("Updated School:", school);

/////////////////////////////////////////////////////

let orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

// TODO: Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
  let group = {};
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "delivered") {
      if (group[orders[i].status] === undefined) {
        group[orders[i].status] = [];
      }
      group[orders[i].status].push(orders[i]);
    }
  }
  return group;
}
getDeliveredOrders(orders);
console.log("Delivered Orders:", getDeliveredOrders(orders));

// TODO: Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
  let occurrences = {};
  for (let i = 0; i < orders.length; i++) {
    if (occurrences[orders[i].product] === undefined) {
      occurrences[orders[i].product] = 1;
    } else {
      occurrences[orders[i].product]++;
    }
  }
  return occurrences;
}

let productCounts = countProductOccurrences(orders);
console.log("Product Counts:", productCounts);
/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */
