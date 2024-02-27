const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @const UserSchema 
 * It is Schema of Collecton (users)
 */

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



const UserModel = mongoose.model("user", UserSchema);

//exporting UserModel

module.exports = UserModel;
