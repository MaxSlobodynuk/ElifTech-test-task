import { createUser } from "../services/user.js";

export const register = async (req, res, next) => {
  const { email, fullName, dateOfBirth, source } = req.body;

  const user = await createUser({ email, fullName, dateOfBirth, source });

  res.status(200).json({
    message: "Created user",
    data: user,
  });
};
