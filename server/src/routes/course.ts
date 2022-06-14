import {Router} from "express";
import {coursePostController} from "./../controllers/courseControllers";
const router = Router();

router.get("/", coursePostController);

export default router;