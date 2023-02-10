const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);

    const newUser = await User.create(req.body);

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      status: "success",
      data: {
        token,
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const userData = await User.findOne({
      email: req.body.email,
    });

    if (!userData) throw new Error("Email not found");

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!passwordMatch) throw new Error("Password is incorrect");

    const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      status: "success",
      data: {
        token,
        data: userData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
