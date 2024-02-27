const mongoose = require("mongoose");
const url = process.env.MONGO_URL;


//connecting Database
mongoose
  .connect(url)
  .then(() => {
    console.log("Mongo Database is Connected.....");
  })
  .catch((err) => {
    console.log("Mongo Database is Not | Connected ERROR:-" + err);
  });
