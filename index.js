const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const skey = "skey";

//creating basic api

const Port = 3000;

app.get("/login", (req, res) => {
  res.json({
    message: "hello Guyss  yess",
  });
});

//login API

app.post("/login", (req, res) => {
  //sample user to Return

  user = {
    id: 1,
    name: "umesh",
    mail: "umesh32@gmail.com",
  };

  //jwt function sign to pass data & secret Key
  jwt.sign({ user }, skey, { expiresIn: "300s" }, (err, token) => {
    res.json({ token });
  });
});

//posts APi

app.post("/post", verifyToken, (req, res) => {});

//verify the Token

function verifyToken(req, res, next) {}

app.listen(Port, () => {});
console.log("api Running On " + Port);
