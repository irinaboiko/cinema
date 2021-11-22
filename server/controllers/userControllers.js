const User = require("../models/userModel");

const getUserController = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.find({ _id: userId });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error + "Something went wrong..." });
  }
};

module.exports = {
  getUserController,
};
