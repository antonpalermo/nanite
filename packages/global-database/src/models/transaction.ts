import { Schema, model } from "mongoose";

const transaction = new Schema({
  amount: {
    type: Number,
  },
  recipient: String,
});

export default model("transactions", transaction);
