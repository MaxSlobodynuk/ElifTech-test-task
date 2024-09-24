export const notFoundHandler = () => {
  res.status(404).json({
    message: "Not found",
  });
};
