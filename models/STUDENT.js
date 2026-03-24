import { query } from "../config/db";
import { CREATE_STUDENT_TABLE } from "../queries/studentQuery";


export const migrateStudentModel = async () => {

    try {
        await query(CREATE_STUDENT_TABLE);
        console.log('Student Table Successfully Created');
        process.exit(0);
    } catch (error) {
        console.log(`Error while creating student table: ${error?.message} `)
        process.exit(-1);
    }

}
