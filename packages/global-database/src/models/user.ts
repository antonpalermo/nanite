import { Schema, model } from "mongoose";

const user = new Schema({
  name: String,
  username: String,
  password: String,
});

export default model("users", user);
