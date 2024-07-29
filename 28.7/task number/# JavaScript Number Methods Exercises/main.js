// 1
console.log((3.14159).toFixed());
console.log((3.14159).toFixed(2));
// 2
let num = 42;
console.log(num.toString());
// 3
num = 123.456789;
console.log(num.toPrecision(5));
// 4
console.log(parseInt("56"));
// 5
console.log(parseFloat("3.14"));
// 6
console.log(isNaN("aviel"));
// 7
console.log(isFinite(50));
// 8
num = 255;
console.log(num.toString(16));
// 9
num = 0.000001;
console.log(num.toFixed(9));

// 10
console.log(parseInt("1010", 2));
// 11
num = 0.000123456;
console.log(num.toPrecision(3));
// 12
console.log(isNaN(0 / 0));
// 13
num = 1000000;
console.log(num.toExponential(2));
// 14
console.log(parseFloat("3.14some"));
// 15
num = 16;
console.log(num.toString(2));
// 16
console.log(isFinite());
// 17
num = 1.23e-5;
console.log(num.toFixed(8));
// 18
console.log(parseInt("777", 8));
// 19
num = 123456.789;
console.log(num.toPrecision(4));
// 20
console.log(isNaN(NaN));
// 21
num = -10;
console.log(num.toString());
// 22
console.log(parseFloat("1.2e-3"));
// 23
num = 1234.5678;
console.log(num.toFixed(2));
// 24
console.log(isFinite(1 / 0));
// 25
console.log(parseInt("FF", 16));
