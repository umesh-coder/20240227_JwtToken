const express = require("express");
const { registerUser, loginUser } = require("../userController");
const {
  userLoginalidate,
  userRegisterValidate,
} = require("../utils/userValidation");

const routes = express.Router();

//creating Routes

//register Route
routes.post("/register", userRegisterValidate, registerUser);

//login Route
routes.post("/login", userLoginalidate, loginUser);

//exporting Route
module.exports = routes;
