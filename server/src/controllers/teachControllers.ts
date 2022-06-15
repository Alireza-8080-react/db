import {Connect, Query} from "./../config/db";
import {Request, Response} from "express";
import {QUERIES} from "./../utils/db-utills/QUERIES";

export const teachGetController = (req: Request, res: Response) => {
    const {param,condition} = req.query;
    const query = QUERIES.getAllTeachCourses(param,condition);
    console.log(query);
    Connect()
        .then(connection=>{
            Query(connection,query)
                .then(result=> res.status(200).json({result}))
                .catch(err=>res.status(400).json(err))
        })
        .catch(err=>res.status(400).json(err))
}