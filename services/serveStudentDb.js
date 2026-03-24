const { query } = require("../config/db")
const { 
    INSERT_STUDENT_TABLE, 
    GET_ALL_STUDENTS, 
    UPDATE_STUDENT_GRADE, 
    DELETE_STUDENT
} = require("../queries/studentQuery")

const addStudentToDb = async (studentDataToBeAdded) => {

    const {
        studentName: student_name,
        studentEmail: student_email,
        grade,
        studentNote: student_note
    } = studentDataToBeAdded;

    const result = await query(
        INSERT_STUDENT_TABLE, 
        [        
            student_name,
            student_email,
            grade,
            student_note
        ]
    );

    return result.rows[0];
}

const getStudentsFromDb = async () => {
    
    const result = await query(GET_ALL_STUDENTS);
    return result.rows;
}

const updateStudentGradeInDbByStudentId = async (studentId, gradeToUpdateWith) => {
    
    const result = await query(UPDATE_STUDENT_GRADE,
        [
            studentId,
            gradeToUpdateWith
        ]
    );

    return result.rows[0];
}

const deleteStudentFromDbByStudentId = async (studentId) => {
    
    const result = await query(
        DELETE_STUDENT,
        [studentId]
    );

    return result.rows[0];
}

module.exports = {
    addStudentToDb,
    getStudentsFromDb,
    updateStudentGradeInDbByStudentId,
    deleteStudentFromDbByStudentId
}