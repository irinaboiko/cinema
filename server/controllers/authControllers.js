const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "Your account was created" });
  } catch (error) {
    res.status(500).json({ message: `${error}, Something went wrong...` });
  }
};

const signInController = async (req, res) => {
  try {
    const { user } = req;
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    res.status(201).json({
      user,
      userToken: token,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
};

module.exports = {
  signUpController,
  signInController,
};
