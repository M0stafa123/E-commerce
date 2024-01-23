import express from "express";
import cors from "cors";
import Router from "./routes";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
// app.use(cors());
app.use(Router);
const url =
  "mongodb+srv://Mostafa:Whatisur1@e-commerce.thmtvd0.mongodb.net/shop?retryWrites=true&w=majority";

mongoose
  .connect(process.env.URl || url)
  .then(() => console.log("connected successfully"));
app.get("/", (_req, res) => {
  res.send("connected successfully");
});
app.listen(port, async () => {
  console.log(`server running on http://localhost:${port}`);
});
