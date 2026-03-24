const { query } = require("../config/db")
const { 
    INSERT_STUDENT_TABLE, 
    GET_ALL_STUDENTS, 
    UPDATE_STUDENT_GRADE 
} = require("../queries/studentQuery")

const addStudentToDb = async (studentDataToBeAdded) => {

    const {
        student_name,
        student_email,
        grade,
        student_note
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

module.exports = {
    addStudentToDb,
    getStudentsFromDb,
    updateStudentGradeInDbByStudentId
}