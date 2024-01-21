import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import Router from "./routes";
import dotenv from "dotenv";
const app = express();
const port = 5000;
dotenv.config();
app.use(cors());
app.use(Router);

const url = "mongodb://0.0.0.0:27017/E-commerce";
const Client = new MongoClient(process.env.url || url);
app.get("/", (_req, res) => {
  res.send("connected successfully");
});
app.listen(port, async () => {
  // await Client.connect();
  console.log(`server running on http://localhost:${port}`);
});
