import {TABLES} from "./TABLES";

const handleSelectAll = (table : string,cond : string) =>`SELECT * from ${table} where ${cond}`

export const QUERIES = {
    getStudentGrades : (studentId : string) => handleSelectAll(TABLES.grades,`ID = ${studentId}`),
    postCourses : `INSERT INTO takes (ID, course_id, sec_id, semester, year,grade) 
    VALUES ('00128', 'PHY-101', '1', 'Fall', '2009', '0');`,
}