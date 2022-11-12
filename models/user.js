const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    identifier: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    givenName: {
      type: String,
      required: true,
    },
    familyName: {
      type: String,
      required: true,
    },
    locale: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    characters: [{ type: String }],
  },
  { collection: "users", timestamps: true }
);

module.exports = model("User", userSchema);
