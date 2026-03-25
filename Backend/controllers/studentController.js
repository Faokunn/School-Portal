const studentService = require("../services/studentService");
const { createStudentSchema, updateStudentSchema, studentResponseSchema, successfulResponse, unsuccessfulResponse } = require("../schemas/studentSchema");

// GET /students
const getStudents = async (req, res) => {
    try {
        const students = await studentService.getStudents();

        // Transform MongoDB _id to id
        const response = students.map((s) => ({
            id: s._id.toString(),
            firstName: s.firstName,
            lastName: s.lastName,
            yearLevel: s.yearLevel,
            age: s.age,
            course: s.course,
            enrolledAt: s.enrolledAt
        }));

        // studentResponseSchema.validate(response);

        res.json(response);
    } catch (err) {
        res.status(500).json({ message: err.message, code: 500 });
    }
};

// POST /students
const addStudent = async (req, res) => {
    try {
        // Validate input
        const { error } = createStudentSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message, code: 400 });

        const student = await studentService.addStudent(req.body);

        // Transform _id to id
        const response = {
            id: student._id.toString(),
            firstName: student.firstName,
            lastName: student.lastName,
            yearLevel: student.yearLevel,
            age: student.age,
            course: student.course,
            enrolledAt: student.enrolledAt
        };

        res.status(201).json({ message: "Student created successfully", code: 201, student: response });
    } catch (err) {
        res.status(500).json({ message: err.message, code: 500 });
    }
};

// PUT /students/:id
const updateStudent = async (req, res) => {
    try {
        const { error } = updateStudentSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message, code: 400 });

        const student = await studentService.updateStudent(req.params.id, req.body);
        if (!student) return res.status(404).json({ message: "Student not found", code: 404 });

        const response = {
            id: student._id.toString(),
            firstName: student.firstName,
            lastName: student.lastName,
            yearLevel: student.yearLevel,
            age: student.age,
            course: student.course,
            enrolledAt: student.enrolledAt
        };

        res.json({ message: "Student updated successfully", code: 200, student: response });
    } catch (err) {
        res.status(500).json({ message: err.message, code: 500 });
    }
};


const removeStudent = async (req, res) => {
    try {
        const student = await studentService.removeStudent(req.params.id);
        if (!student) return res.status(404).json({ message: "Student not found", code: 404 });

        res.json({ message: "Student deleted successfully", code: 200 });
    } catch (err) {
        res.status(500).json({ message: err.message, code: 500 });
    }
};

module.exports = { getStudents, addStudent, updateStudent, removeStudent };