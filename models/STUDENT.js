const { query } = require("../config/db");
const { CREATE_STUDENT_TABLE } = require("../queries/studentQuery");

const migrateStudentModel = async () => {

    try {
        await query(CREATE_STUDENT_TABLE);
        console.log('Student Table Successfully Created');
        // process.exit();
    } catch (error) {
        console.log(`Error while creating student table: ${error?.message} `)
        process.exit(-1);
    }

}

module.exports = {
    migrateStudentModel
}
