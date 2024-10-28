console.log("hello word");
const fs = require("fs");

//read from file
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data.toString());
});

//create new file with text
fs.writeFile("newHello.txt", "maccabi haifa", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("file created");
});

//update file that ext
fs.appendFile("newHello.txt", "\n maccabi haifa", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("file updated");
});

fs.readFile("input.txt", "utf8", async (err, data) => {
  if (err) {
    console.error(err);
  }
  fs.writeFile("output.txt", await data.toString(), async (err) => {
    if (err) {
      console.error(err);
    }
    fs.appendFile(await "output.txt", "\n file updated", (err) => {
      if (err) {
        console.error(err);
      }
    });
    console.log("file created");
  });
});
