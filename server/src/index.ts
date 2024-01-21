import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import Router from "./routes";
const app = express();
const port = 5000;

app.use(cors());
app.use(Router);

const url = "mongodb://0.0.0.0:27017/E-commerce";
const Client = new MongoClient(url);
app.get("/", (_req, res) => {
  res.send("connected successfully");
});
app.listen(port, async () => {
  // await Client.connect();
  console.log(`server running on http://localhost:${port}`);
});
