const Student = require("../models/users/studentModel");

const getAllStudents = () => Student.find();
const createStudent = (studentData) => new Student(studentData).save();
const deleteStudent = (id) => Student.findByIdAndDelete(id);
const updateStudent = (id, studentData) => {
  return Student.findByIdAndUpdate(id, studentData, { new: true });
};

module.exports = {
  getAllStudents,
  createStudent,
  deleteStudent,
  updateStudent,
};
