import createHttpError from "http-errors";
import { getAllEvents, getEventById } from "../services/events.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";

export const getEventsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const events = await getAllEvents({ page, perPage });

  res.status(200).json({
    data: events,
  });
};

export const getEventByIdController = async (req, res) => {
  const { eventId } = req.params;
  const events = await getEventById(eventId);

  if (!events) {
    throw createHttpError(404, "Student not found");
  }

  res.status(200).json({
    data: events,
  });
};
