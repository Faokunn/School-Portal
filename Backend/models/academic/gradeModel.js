const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    semester: { type: Number, required: true },
    period: { type: Number, required: true, enum: [1, 2, 3] },
    grade: { type: Number, required: true },
    finalGrade: { type: Number, default: null },
  },
  { timestamps: true },
);

gradeSchema.index(
  { student: 1, subject: 1, semester: 1, period: 1 },
  { unique: true },
);

const Grade = mongoose.model("Grade", gradeSchema);
module.exports = Grade;
