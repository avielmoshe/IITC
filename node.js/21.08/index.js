const express = require("express");

const app = express();
const contact = {
  name: "aviel moshe",
  email: "avielmoshe@gmail.com",
};
const products = [
  {
    id: "1",
    name: "iphone",
    price: 5000,
  },
  { id: "2", name: "sumsung", price: 4500 },
];

app.get("/", (req, res) => {
  res.send("Welcome to my basic Express server!");
});
app.get("/about", (req, res) => {
  res.send("my name is aviel moshe");
});
app.get("/contact", (req, res) => {
  res.json(contact);
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) product = products[i];
  }
  if (product === null) res.send("product not found");
  else res.json(product);
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
