import { model, Schema } from "mongoose";

const usersSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    source: {
      type: String,
      required: true,
      enum: ["Social media", "Friends", "Found myself"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const userCollection = model("users", usersSchema);
