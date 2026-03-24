const express = require('express');
const { addStudent, getStudents, updateStudentGrade, deleteStudent } = require('../controllers/Student');
const studentRouter = express.Router();

studentRouter.post('/add-student',addStudent);
studentRouter.get('/',getStudents);
studentRouter.patch('/update-student/:id',updateStudentGrade);
studentRouter.delete('/delete-student/:id',deleteStudent);

module.exports = studentRouter;