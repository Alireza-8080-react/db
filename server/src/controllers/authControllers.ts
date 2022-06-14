import { Request, Response } from "express";
import {LOGIN_ERRORS} from "@utils/ERROR_MESSAGES";

export const loginController = (req: Request, res: Response) => {
    const reqValues = req.body;
    const email = reqValues.email;
    const password = reqValues.password;
    if (!email || !password) {
        res.status(400).json(LOGIN_ERRORS.requiredFieldsNotEntered);
    }
    // UserModel.findOne({
    //     email,
    // })
    //     .then((result: LoginResultType) => {
    //         if (!result || !result.isVerified) {
    //             throw "wrong email or not verified";
    //         }
    //         const originalPassword = CryptoJS.AES.decrypt(
    //             result.password,
    //             process.env.PASS_SEC ?? "",
    //         ).toString(CryptoJS.enc.Utf8);
    //         const { password, ...otherData } = result._doc;
    //         const accessToken = jwt.sign(
    //             {
    //                 id: result._id,
    //                 isAdmin: result.isAdmin,
    //             },
    //             process.env.JWT_SEC ?? "",
    //             { expiresIn: "5d" },
    //         );
    //         if (originalPassword === reqValues.password) {
    //             res.status(200).json({ ...otherData, accessToken });
    //             return;
    //         }
    //         res.status(400).json(LOGIN_ERRORS.wrongPassword);
    //     })
    //     .catch((err) => res.status(400).json({ text: LOGIN_ERRORS.wrongEmail, err }));
};

