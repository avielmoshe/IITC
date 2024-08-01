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
let todoList={
  task: ["made a diner","shoping",],
  completedTasks:["homework","go to gym"],
  addTask:function (task){
     this.task.push(task)
  },
  completeTask: function(task){
    this.completeTask.push(task)
  },
  displayTasks:function (){
  {
      console.log(this.task)    
  }
}
}
todoList.displayTasks()
