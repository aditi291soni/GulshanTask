const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  names: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
    default: "male",
  },
  dob: {
    type: String,
    required: [true, "Please enter your dob"],
  },
  enroll: {
    type: Date,
    default: Date.now,
  },
  batch: {
    type: String,
    required: true,
  },
 
});

module.exports = model("User", userSchema);
