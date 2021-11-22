const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const isValidCredentialsMiddleware = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User was not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Password is wrong" });
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
};

module.exports = {
  isValidCredentialsMiddleware,
};
