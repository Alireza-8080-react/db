import {Router} from "express";
import {gradeGetController} from "./../controllers/gradeControllers";
const router = Router();

router.get("/", gradeGetController);

export default router;