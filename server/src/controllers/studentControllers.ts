import {Connect, Query} from "./../config/db";
import {Request, Response} from "express";

export const studentGetController = (req: Request, res: Response) => {
    const query = "SELECT * from student";
    Connect()
        .then(connection=>{
            Query(connection,query)
                .then(result=> res.status(200).json({result}))
                .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
}