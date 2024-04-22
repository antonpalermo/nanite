import { Schema, model } from "mongoose";

const wallet = new Schema({
  balance: {
    type: Number,
  },
});

export default model("wallet", wallet);
