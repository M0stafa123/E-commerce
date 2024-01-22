import express from "express";

const all = express.Router();

all.get("/", (req, res) => {
  res.send(`
// users
/users => GET - DELETE ALL
// auth
/auth/register => POST
/auth/login => POST
`);
});
