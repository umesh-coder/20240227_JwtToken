const express = require("express");

const routes = require("./routes");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./config/db");
const app = express();

//creating basic api

const Port = process.env.Port || 8080;

//import the routes
app.use(bodyParser.json());
app.use("/api/v1", routes);

//server listen port
app.listen(Port, () => {});
console.log("api Running On " + Port);

// app.get("/login", (req, res) => {
//   res.json({
//     message: "hello Guyss  yess",
//   });
// });

// //login API

// app.post("/login", (req, res) => {
//   //sample user to Return

//   user = {
//     id: 1,
//     name: "umesh",
//     mail: "umesh32@gmail.com",
//   };

//   //jwt function sign to pass data & secret Key
//   jwt.sign({ user }, skey, { expiresIn: "300s" }, (err, token) => {
//     res.json({ token });
//   });
// });

// //posts APi

// app.post("/post", verifyToken, (req, res) => {});

// //verify the Token

// function verifyToken(req, res, next) {}
