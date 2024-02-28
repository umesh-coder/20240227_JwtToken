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
app.use("/auth_api", routes);

//server listening
app.listen(Port, () => {});
console.log("Api is Running On Port:- " + Port);


