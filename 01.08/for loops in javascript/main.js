// 1
function twoTwo(num) {
  let rows = "";
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= num; j++) {
      rows += i * j + " ";
    }
    rows += "\n";
  }
  console.log(rows);
}
twoTwo(2);
// 2
function grid_4() {
  let counter = 1;

  let row = "";
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      row += counter + " ";
      counter++;
    }
    row += "\n";
  }
  console.log(row);
}

grid_4();

// 3
function triangle(num) {
  let row = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    row += "\n";
  }
  console.log(row);
}
triangle(3);
// 4
function three() {
  let rows = "";
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      rows += i + j + " ";
    }
    rows += "\n";
  }
  console.log(rows);
}
three();
// 5
function ar() {
  let rows = "";
  for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 3; j++) {
      rows += i * j + " ";
    }
    rows += "\n";
  }
  console.log();
}
ar();
// 6

function border() {
  let row = "";
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i === 1 || i === 3 || j === 1 || j === 3) {
        row += "*";
      } else row += " ";
    }
    row += "\n";
  }
  console.log(row);
}

border();

// 7
function priThe() {
  let counter = 1;
  let row = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      row += counter +" ";
      counter++;
    }
    row += "\n";
  }
  console.log(row);
}
priThe()

// 8
