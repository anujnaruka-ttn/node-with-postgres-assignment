const { 
    addStudentToDb, 
    getStudentsFromDb 
} = require("../services/serveStudentDb");
const { 
    validationError, 
    success,
    serverError, 
} = require("../utils/response");

const addStudent = async (req,res) => {

    try {
        
        const {
            studentName,
            studentEmail,
            grade,
            studentNote
        } = req.body;

        if(!studentName || !studentEmail || !grade) return validationError(
            res,
            `Student Name, Student Email, Grade all these are required.`
        );

        const studentData = {
            studentName,
            studentEmail,
            grade,
            studentNote
        }
        
        const addedStudent = await addStudentToDb(studentData);

        return success(
            res,
            addedStudent,
            'Student Added Successfully.',
            201
        );

    } catch (err) {
        
        return serverError(res,err?.message);

    }

};
const getStudents = async (_req,res) => {

    try {
        
        const allStudents = await getStudentsFromDb();

        return success(
            res,
            allStudents,
            'All Student Fetched Successfully.'
        )
    
    } catch (err) {
        
        return serverError(res,err?.message);

    }


};
const updateStudentGrade = async (req,res) => {

    try {

        const { updatedGrade } = req.body;

        const { studentId } = req.params;

        if(!studentId) return validationError(res,'Student Id needed');

        if(!updatedGrade) return validationError(res,'To update grade it is required');

        const studentWithUpdatedGrade = await updateStudentGradeInDbByStudentId(studentId, updatedGrade);

        return success(
            res,
            `Student ${studentWithUpdatedGrade?.student_name} updated with grade ${updatedGrade}`,
            204
        )

        
    } catch (err) {
        
        return serverError(res,err?.message);

    }
};
const deleteStudent = () => {};

module.exports = {
    addStudent,
    getStudents,
    updateStudentGrade,
    deleteStudent
}