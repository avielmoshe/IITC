import express from "express";
import morgan from "morgan";
import { MongoClient, ServerApiVersion } from "mongodb";

const PORT = 3000;
const app = express();
app.use(morgan("tiny"));

const uri =
  "mongodb+srv://mosheavieli:153759Mas@cluster0.1geou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.status(201).send({ messeage: "hello world" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
