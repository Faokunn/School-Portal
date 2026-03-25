const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

const Professor = mongoose.model("Professor", professorSchema);
module.exports = Professor;
