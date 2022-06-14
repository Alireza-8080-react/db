import "dotenv/config";
import mysql , {Connection} from "mysql";

const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "university";
const MYSQL_USER = process.env.MYSQL_USER || "user";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "password";

const MYSQL = {
    host : MYSQL_HOST ,
    database : MYSQL_DATABASE ,
    user : MYSQL_USER ,
    password : MYSQL_PASSWORD ,
}

export const Connect = async () => new Promise<Connection>((resolve,reject)=>{
    const connection = mysql.createConnection(MYSQL);
    connection.connect(error=>{
        if(error) return reject(error);
        resolve(connection);
    })
})

export const Query = async (connection:Connection , query:string)=>
    new Promise<Connection>((resolve,reject)=>{
        connection.query(query,connection,(error,result)=>{
            if(error) return reject(error);
            resolve(result);
        })
    })
