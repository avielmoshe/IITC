import express from "express";
import Product from "../models/productModel.js";
// import authUser from "../middleware/auth.js";

const router = express.Router();
// router.use(authUser);

router.get("/", (req, res) => {
  res.send(names);
});

router.get("/random", (req, res) => {
  const randomProducts = products[Math.floor(Math.random() * products.length)];
  res.send(randomProducts);
});

router.get("/:id", (req, res) => {
  const id = +req.params["id"];
  const data = products.find((product) => product.id === id);
  if (data) {
    res.send(data);
  }
  res.send({
    error: "error",
  });
});

router.post("/name", (req, res) => {
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

router.patch("/:id", (req, res) => {
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

export default router;
