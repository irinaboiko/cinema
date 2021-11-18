const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
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
    min: 6,
  },
  role: {
    type: String,
    required: true,
    default: "USER",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
