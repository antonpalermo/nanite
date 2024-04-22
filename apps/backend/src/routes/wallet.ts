import express from "express";

export function walletRoutes() {
  const router = express.Router();

  router.get("/balance", (req, res) => {
    return res.status(200).json({ message: "feature not yet implemented." });
  });

  return router;
}
