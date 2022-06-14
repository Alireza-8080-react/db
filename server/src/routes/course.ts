import {Router} from "express";
import {coursePostController} from "./../controllers/courseControllers";
const router = Router();

router.post("/", coursePostController);

export default router;