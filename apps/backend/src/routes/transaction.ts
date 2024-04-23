import express from "express";

export function transactionRoutes() {
  const router = express.Router();

  router.post("/create", (req, res) => {
    return res.status(200).json({ message: "feature not yet implemented." });
  });

  return router;
}
