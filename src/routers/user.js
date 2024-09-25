import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js"
import { register } from "../controllers/user.js";
const router = Router();

router.post("/auth/register", ctrlWrapper(register));

export default router;