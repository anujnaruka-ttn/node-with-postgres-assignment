/*
Create Functions for CRUD Operations:
Create: Implement a function to add a new student to the students table.
Read: Implement a function to fetch all students from the table.
Update: Implement a function to update a student’s grade based on their id.
Delete: Implement a function to delete a student by id.
Test the CRUD Operations:
Create a main.js file where you:
Add a student.
Retrieve all students.
Update a student's grade.
Delete a student.
 */



const express = require('express');
const app = express();
const studentRouter = require('./routes/studentRoutes');

const PORT = 5000;

app.use(express.json());
app.use('/api/v1/students',studentRouter);



