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
let circle ={
    radius:5,
    color:"green",
    calculateArea: function(){
        console.log(`the Area is ${Math.PI*this.radius*this.radius}`);
    },
    calculateCircumference: function(){
        console.log(`the circumference is ${Math.PI*this.radius*2}`);
    }

}
circle.calculateArea()
circle. calculateCircumference(

)
// 14
let student={
    name:"aviel",
    grades:[90,95,98,96,92,93,90,85],
    }

