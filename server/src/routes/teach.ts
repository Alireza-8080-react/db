import {Router} from "express";
import {gradeGetController} from "./../controllers/gradeControllers";
import {teachGetController} from "./../controllers/teachControllers";
const router = Router();

router.get("/", teachGetController);

export default router;