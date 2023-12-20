const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    mobile: {
      type: String,
      trim: true,
      required: true,
      unique: true // `mobile` must be unique
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true // `email` must be unique
    },
    role: {
      type: String,
      default: "user",
      required: true, 
    },
    password: {
      type: String,
      required: true,
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organizations",
    },
  },
  { timestamps: true }
);

const Users = new mongoose.model("User", userSchema);
module.exports = Users;
