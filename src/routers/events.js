import { Router } from "express";
import { getEventByIdController, getEventsController } from "../controllers/events.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get("/events", ctrlWrapper(getEventsController));

router.get("/events/:eventId", ctrlWrapper(getEventByIdController));

export default router;
