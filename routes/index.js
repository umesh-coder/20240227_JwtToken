const express = require("express");
const { registerUser, loginUser } = require("../userController");

const routes = express.Router();

//creating Routes

//register Route
routes.post("/register", registerUser);

//login Route
routes.post("/login", loginUser);

//exporting Route
module.exports = routes;
