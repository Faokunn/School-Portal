const studentRepo = require("../repository/studentRepository");

// Get all students
const getStudents = async () => {
    return await studentRepo.getAllStudents();
};

// Add a new student
const addStudent = async (studentData) => {
    studentData.firstName =
        studentData.firstName.charAt(0).toUpperCase() +
        studentData.firstName.slice(1);
    studentData.lastName =
        studentData.lastName.charAt(0).toUpperCase() +
        studentData.lastName.slice(1);

    return await studentRepo.createStudent(studentData);
};

const updateStudent = async (id, studentData) => {
    if (studentData.firstName) {
        studentData.firstName =
            studentData.firstName.charAt(0).toUpperCase() +
            studentData.firstName.slice(1);
    }
    if (studentData.lastName) {
        studentData.lastName =
            studentData.lastName.charAt(0).toUpperCase() +
            studentData.lastName.slice(1);
    }

    return await studentRepo.updateStudent(id, studentData);
};

const removeStudent = async (id) => {
    return await studentRepo.deleteStudent(id);
};

module.exports = { getStudents, addStudent, updateStudent, removeStudent };