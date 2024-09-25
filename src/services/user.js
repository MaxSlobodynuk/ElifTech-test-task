import { userCollection } from "../db/models/user.js";

export const createUser = async (user) => {
  console.log(user);
  return userCollection.create(user);
};
