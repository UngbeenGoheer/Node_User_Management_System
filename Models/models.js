const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },
    Email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true,
    },
    PhoneNo: {
      type: Number,
      trim: true,
      required: true,
    },
    CNIC: {
      type: String,
      trim: true,
      required: true,
    },
    Role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    Password: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = { User };
