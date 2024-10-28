import express from "express";
import morgan from "morgan";
import jokes from "./db/jokes.json" assert { type: "json" };
import names from "./db/names.json" assert { type: "json" };
import products from "./db/products.json" assert { type: "json" };
import fs from "fs/promises";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(morgan("combined"));
//check if the server work
app.get("/api/status", (req, res) => {
  res.send({ status: "server is running" });
});

//get random
app.get("/api/joke/random", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send(randomJoke);
});

app.get("/api/name/random", (req, res) => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  res.send(randomName);
});

app.get("/api/product/random", (req, res) => {
  const randomProducts = products[Math.floor(Math.random() * products.length)];
  res.send(randomProducts);
});

//get by id
app.get("/api/joke/:id", (req, res) => {
  const id = +req.params["id"];
  const data = jokes.find((joke) => joke.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "error",
  });
});

app.get("/api/name/:id", (req, res) => {
  const id = +req.params["id"];
  const data = names.find((name) => name.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "error",
  });
});

app.get("/api/product/:id", (req, res) => {
  const id = +req.params["id"];
  const data = products.find((product) => product.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "error",
  });
});

//add new
app.post("/api/joke", (req, res) => {
  const newJoke = req.body;
  jokes.push(newJoke);
  fs.writeFile("db/jokes.json", JSON.stringify(jokes, null, 2), (err) => {
    if (err) {
      console.error(err);
    }
    console.log("file created");
  });
  res.send({ message: "joke added", jokes: jokes });
});

app.post("/api/name", (req, res) => {
  const newName = req.body;
  names.push(newName);
  fs.writeFile("db/names.json", JSON.stringify(names, null, 2), (err) => {
    if (err) {
      console.error(err);
    }
    console.log("file created");
  });
  res.send({ message: "name added", newName: newName, names: names });
});

app.post("/api/product", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  fs.writeFile("db/products.json", JSON.stringify(products, null, 2), (err) => {
    if (err) {
      console.error(err);
    }
    console.log("file created");
  });
  res.send({
    message: "product added",
    newProduct: newProduct,
    products: products,
  });
});

// edit by id
app.patch("/api/joke/:id", (req, res) => {
  const id = +req.params["id"];
  const jokeIndex = jokes.findIndex((joke) => joke.id === id);
  if (jokeIndex === -1) {
    return res.send({ error: "Joke not found" });
  }
  jokes[jokeIndex] = { ...req.body };
  fs.writeFile("db/jokes.json", JSON.stringify(jokes, null, 2));
  res.send({ message: "Joke updated successfully", joke: jokes[jokeIndex] });
});

app.patch("/api/name/:id", (req, res) => {
  const id = +req.params["id"];
  const nameIndex = names.findIndex((name) => name.id === id);
  if (nameIndex === -1) {
    return res.send({ error: "name not found" });
  }
  names[nameIndex] = { ...req.body };
  fs.writeFile("db/names.json", JSON.stringify(names, null, 2));
  res.send({ message: "name updated successfully", name: names[nameIndex] });
});

app.patch("/api/product/:id", (req, res) => {
  const id = +req.params["id"];
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    return res.send({ error: "product not found" });
  }
  products[productIndex] = { ...req.body };
  fs.writeFile("db/products.json", JSON.stringify(products, null, 2));
  res.send({
    message: "name updated successfully",
    product: products[productIndex],
  });
});

//delete by id
app.delete("/api/joke/:id", (req, res) => {
  const id = +req.params["id"];
  if (deleteById(id, jokes)) {
    res.send({ error: "joke not found" });
  }
  fs.writeFile("db/jokes.json", JSON.stringify(jokes, null, 2));
  res.send({ message: "removed successfully", remainJokes: jokes });
});

app.delete("/api/name/:id", (req, res) => {
  const id = +req.params["id"];
  if (deleteById(id, names)) {
    res.send({ error: "name not found" });
  }
  fs.writeFile("db/names.json", JSON.stringify(names, null, 2));
  res.send({ message: "removed successfully", remainNames: names });
});

app.delete("/api/product/:id", (req, res) => {
  const id = +req.params["id"];
  if (deleteById(id, products)) {
    res.send({ error: "product not found" });
  }
  fs.writeFile("db/products.json", JSON.stringify(products, null, 2));
  res.send({
    message: "removed successfully",
    products: products,
  });
});

//general delete
function deleteById(id, db) {
  const dbIndex = db.findIndex((currentObg) => currentObg.id === id);
  if (dbIndex === -1) {
    return true;
  }
  db.splice(dbIndex, 1);
}
//
app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`);
});
