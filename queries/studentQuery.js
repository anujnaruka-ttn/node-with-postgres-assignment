const CREATE_STUDENT_TABLE = `
    CREATE TABLE IF NOT EXISTS students (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        student_name VARCHAR(255) NOT NULL,
        student_email TEXT UNIQUE NOT NULL,
        grade INT CHECK (grade BETWEEN 1 AND 12) NOT NULL,
        student_note TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

const INSERT_STUDENT_TABLE = `
    INSERT INTO students (student_name, student_email, grade, student_note) 
    VALUES ($1, $2, $3, $4) 
    RETURNING *
`;

const GET_ALL_STUDENTS = `SELECT * FROM students`;

const UPDATE_STUDENT_GRADE = `
    UPDATE students SET grade = $2 WHERE id = $1 
    RETURNING *
`;

const DELETE_STUDENT = `
    DELETE FROM students WHERE id = $1 
    RETURNING *
`;

module.exports = {
    CREATE_STUDENT_TABLE,
    INSERT_STUDENT_TABLE,
    GET_ALL_STUDENTS,
    UPDATE_STUDENT_GRADE,
    DELETE_STUDENT
}