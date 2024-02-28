const express = require("express");
const { registerUser, loginUser, getUsers , getSingleUser } = require("../userController");
const { ensureauth } = require("../utils/auth");
const {userLoginalidate,userRegisterValidate} = require("../utils/userValidation");

const routes = express.Router();

//creating Routes

//register Route
routes.post("/register", userRegisterValidate, registerUser);

//login Route
routes.post("/login", userLoginalidate, loginUser);

//get users Route
routes.get("/users", ensureauth, getUsers);

//get single User data by token
routes.get("/user",getSingleUser,(req,res)=>{
    res.json({ user: req.user  });
})

//exporting Route
module.exports = routes;
