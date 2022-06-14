import {Router} from "express";
import {studentGetController} from "./../controllers/studentControllers";

const router = Router();

router.get("/", studentGetController);

export default router;