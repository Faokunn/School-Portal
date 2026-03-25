const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    code: { type: String, required: true, unique: true, trim: true },
    yearLevel: { type: Number, required: true },
    semester: { type: Number, required: true },
  },
  { timestamps: true },
);

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;
