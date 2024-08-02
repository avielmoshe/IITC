// 11
let playlist = {
  name: "gym",
  songs: ["move", "arounds the word", "deep down", "beautiful things"],
  duration: 65,
};
playlist.songs.push("lose control");
playlist.duration = playlist.songs.length * 3;
console.log(playlist.duration);
// 12
let bankAccount = {
  accountNumber: "1234",
  balance: 25000,
  isActive: true,
  deposit: function (amountOfDeposit) {
    this.balance += amountOfDeposit;
    console.log(
      `you deposit ${amountOfDeposit} your new balance is ${this.balance}`
    );
  },
  withdraw: function (amountOfWithdraw) {
    if (this.balance > amountOfWithdraw) {
      this.balance -= amountOfWithdraw;
      console.log(
        `you withdraw from your account ${amountOfWithdraw} your new balance is ${this.balance}`
      );
    } else
      console.log(
        `you can't withdraw from your account ${amountOfWithdraw} your balance is ${this.balance}`
      );
  },
};
bankAccount.deposit(1000);
bankAccount.withdraw(200);
bankAccount.withdraw(40000);
// 13
let circle = {
  radius: 5,
  color: "green",
  calculateArea: function () {
    console.log(`the Area is ${Math.PI * this.radius * this.radius}`);
  },
  calculateCircumference: function () {
    console.log(`the circumference is ${Math.PI * this.radius * 2}`);
  },
};
circle.calculateArea();
circle.calculateCircumference();
// 14
let student = {
  name: "aviel",
  grades: [90, 95, 98, 55, 92, 93, 70, 85],
  calculateAverage: function () {
    let average =
      this.grades.reduce(function myFunc(total, num) {
        return total + num;
      }, 0) / this.grades.length;
    console.log(`the average grade is ${average}`);
  },
  getLetterGrade: function () {
    let newGrade = this.grades.map(function grade(value) {
      if (value >= 90) {
        return "A";
      } else if (value >= 80) {
        return "B";
      } else if (value >= 70) {
        return "C";
      } else if (value >= 60) {
        return "D";
      } else return "F";
    });
    console.log(`the new grades are ${newGrade}`);
  },
};
student.calculateAverage();
student.getLetterGrade();
// 15
let todoList = {
  task: ["made a diner", "shoping"],
  completedTasks: ["homework", "go to gym"],
  addTask: function (task) {
    this.task.push(task);
  },
  completeTask: function (word) {
    this.task = this.task.filter(function check(check) {
      return check !== word;
    });

    this.completedTasks.push(word);
  },
  displayTasks: function () {
    {
      console.log(this.task);
    }
  },
};
todoList.displayTasks();
todoList.completeTask("shoping");
todoList.displayTasks();
console.log(todoList.completedTasks);

// 16
let book = {
  title: "IITC",
  author: "omer mazig",
  isbn: "111111",
  isAvailable: true,
  checkOut: function () {
    if (this.isAvailable) {
      console.log(`you checkout the book`);
      this.isAvailable = false;
    } else {
      console.log(`you can't checkout the book beacuse it is unavailable`);
    }
  },
  return: function () {
    this.isAvailable = true;
    console.log(`you return the book`);
  },
};
book.checkOut();
book.checkOut();
book.return();
book.checkOut();
// 17
// 18
let tempConverter = {
  celsius: 0,
  fahrenheit: 0,
  setc: function (temp) {
    this.celsius = temp;
    this.fahrenheit = (temp * 9) / 5 + 32;
  },
  setF: function (temp) {
    this.fahrenheit = temp;
    this.celsius = ((temp - 32) * 5) / 9;
  },
  getC: function () {
    console.log(`the celsius is ${this.celsius}`);
  },
  getF: function () {
    console.log(`the fahrenheit is ${this.fahrenheit}`);
  },
};
tempConverter.setc(30);
tempConverter.getF();

// 19
let pet = {
  name: "nasrala",
  type: "donkey",
  hunger: 1,
  happiness: 0,
  feed: function (num) {
    this.hunger++;
  },
  play: function (num) {
    this.happiness++;
  },
  getStatus: function () {
    console.log(
      `${this.name} the ${this.type} is ${this.hunger} level of hunger and ${this.happiness} level of happiness`
    );
  },
};
pet.feed(1);
pet.play(1);
pet.getStatus();
// 20
let quiz = {
  questions: [],
};
