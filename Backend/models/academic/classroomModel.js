const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    professor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Professor",
      required: true,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },
    ],
    building: {
      type: String,
      required: true,
      trim: true,
    },
    roomNumber: {
      type: String,
      required: true,
      trim: true,
    },
    floor: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

classroomSchema.path("students").validate(function (value) {
  return value.length > 0;
}, "Classroom must have at least one student enrolled");

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;
