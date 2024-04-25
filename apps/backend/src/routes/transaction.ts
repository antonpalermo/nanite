import express from "express";
import { Transactions } from "@packages/global-database/models";

export function transactionRoutes() {
  const router = express.Router();

  router.post("/transfer", async (req, res) => {
    try {
      const transaction = await Transactions.create({
        amount: 500,
        recipient: "this should be an id",
      });
    } catch (error) {}
    return res.status(200).json({ message: "feature not yet implemented." });
  });

  return router;
}
