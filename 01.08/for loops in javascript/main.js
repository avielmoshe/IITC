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
