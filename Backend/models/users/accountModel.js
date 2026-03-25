const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      required: true,
      enum: ["Student", "Professor"],
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "role",
    },
  },
  { timestamps: true },
);

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
