import {TABLES} from "./TABLES";

const handleSelectAll = (table : string,cond : string) =>`SELECT * from ${table} where ${cond}`

export const QUERIES = {
    getStudentGrades : (studentId : string) => handleSelectAll(TABLES.grades,`ID = ${studentId}`),
    postCourses : ({studentId,courseId,secId,semester,year,grade} : any)=>`INSERT INTO takes (ID, course_id, sec_id, semester, year,grade) 
    VALUES ("${studentId}","${courseId}","${secId}","${semester}","${year}","${grade}");`,
    login : (id : string)=>handleSelectAll("student",`ID = ${id}`)
}