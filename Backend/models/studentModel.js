const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    yearLevel: {
        type: Number,
        required: true
    },
    age: {
        type: Number
    },
    course: {
        type: String
    },
    enrolledAt: {
        type: Date,
        default: Date.now
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;