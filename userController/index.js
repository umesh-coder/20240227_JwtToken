const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = {
  

  /**
   * @method registerUser
   * @param {*} req 
   * @param {*} res 
   * @returns User Creation & error if found
   * Register User Method to Create New User
   */

  registerUser: async (req, res) => {
    const userModel = new UserModel(req.body);
    userModel.password = await bcrypt.hash(req.body.password, 10);

    try {
      const response = await userModel.save();
      response.password = undefined;
      return res
        .status(201)
        .json({ message: "Data Save Sucessfully", data: response });
    } catch (error) {
      return res.status(500).json({ message: "Error", error });
    }
  },
   /**
   * @method loginUser
   * @param {*} req 
   * @param {*} res 
   * @returns user information is Valid & Token Creation & error if found
   * generate Token & Auth The User
   */

  loginUser: async (req, res) => {
    try {
      const user = await UserModel.findOne({ email: req.body.email });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Auth Failed , Invalid UserName & Password" });
      }

      const isPassEqual = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!isPassEqual) {
        return res
          .status(401)
          .json({ message: "Auth Failed , Invalid UserName & Password" });
      }

      const tokenObject = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      };

      const jwtToken = jwt.sign(tokenObject, process.env.SECRET, {
        expiresIn: "4h",
      });

      return res.status(200).json({ jwtToken, tokenObject });
    } catch (error) {
      return res.status(500).json({ message: "error", error });
    }
  },
   /**
   * @method getUsers
   * @param {*} req 
   * @param {*} res 
   * @returns users information  & error if found
   * Display User information if token is valid
   */
  getUsers: async (req, res) => {

    try {
      const users = await UserModel.find() //hide passs({},{password:0})
      return res.status(200).json({data:users})

    } catch (error) {
      return res.status(500).json({message:"Error : - "+error})
    }


  },
};
