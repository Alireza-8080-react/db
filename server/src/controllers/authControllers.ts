import { Request, Response } from "express";
import {LOGIN_ERRORS} from "./../utils/ERROR_MESSAGES";
import {Connect, Query} from "./../config/db";
import {QUERIES} from "./../utils/db-utills/QUERIES";

export const loginController = (req: Request, res: Response) => {
    const {id} = req.body;
    if (!id) {
        res.status(400).json(LOGIN_ERRORS.requiredFieldsNotEntered);
    }
    const query = QUERIES.login(id);
    Connect()
        .then(connection=>{
            Query(connection,query)
                .then(result=> res.status(200).json({result}))
                .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
};

