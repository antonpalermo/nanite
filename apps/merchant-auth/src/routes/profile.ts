import express from "express";

export function routes() {
  const router = express.Router();

  router.get("/details", async (req, res) => {
    try {
    } catch (error) {
      // TODO: add logger here.
      console.log(error);
    }
  });

  return router;
}
