import {Connect, Query} from "./../config/db";
import {Request, Response} from "express";
import {QUERIES} from "./../utils/db-utills/QUERIES";

export const coursePostController = (req: Request, res: Response) => {
    const {id} = req.query;
    const query = QUERIES.postCourses;
    Connect()
        .then(connection=>{
            Query(connection,query)
                .then(result=> res.status(200).json({result}))
                .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
}