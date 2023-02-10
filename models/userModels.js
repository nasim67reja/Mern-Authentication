const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
  },

  email: {
    type: String,
    required: [true, "User must have a email id"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "User must have a password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
