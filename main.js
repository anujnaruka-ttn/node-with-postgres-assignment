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
const { migrateStudentModel } = require('./models/STUDENT');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/v1/students',studentRouter);

migrateStudentModel();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// CRUD Testing Function
const testCRUDOperations = async () => {
    const axios = require('axios');
    const baseURL = `http://localhost:${PORT}/api/v1/students`;
    
    try {
        console.log('=== Testing CRUD Operations ===');
        
        // 1. Add a student
        console.log('\n1. Adding a student...');
        const newStudent = {
            studentName: 'sample-student1',
            studentEmail: 'sample.student1@example.com',
            grade: 1
        };
        const addResponse = await axios.post(`${baseURL}/add-student`, newStudent);
        console.log('Student added:', addResponse.data);
        const studentId = addResponse.data.data.id;
        // 2. Retrieve all students
        console.log('\n2. Retrieving all students...');
        const getAllResponse = await axios.get(baseURL);
        console.log('All students:', getAllResponse.data);
        
        // 3. Update a student's grade
        console.log('\n3. Updating student grade...');
        const updateResponse = await axios.put(`${baseURL}/update-student/${studentId}`, {
            updatedGrade: 11
        });
        console.log('Student updated:', updateResponse.data);
        
        // 4. Delete a student
        console.log('\n4. Deleting student...');
        const deleteResponse = await axios.delete(`${baseURL}/delete-student/${studentId}`);
        console.log('Student deleted:', deleteResponse.data);
        
        console.log('\n=== CRUD Operations Test Completed Successfully ===');
        
    } catch (error) {
        console.error('CRUD Test Error:', error.response?.data || error.message);
    }
};

// Run tests after server starts
setTimeout(() => {
    testCRUDOperations();
}, 2000);

app.get('/', (_req, res) => res.send('Healthy server'));