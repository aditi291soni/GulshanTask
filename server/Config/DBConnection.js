const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

exports.connectDB = async () => {
    try {
  const connect =await mongoose.connect("mongodb://localhost/interntask");
  console.log("DB connected");
    } catch (err) {
      console.log("Mongoose connection error" + err);
    }
};
