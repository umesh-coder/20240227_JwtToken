const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

module.exports = {
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
  loginUser: (req, res) => {
    res.send("Login sucess");
  },
};
