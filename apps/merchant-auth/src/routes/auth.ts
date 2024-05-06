import express from "express";

export function routes() {
  const router = express.Router();

  router.post("/signin", async (req, res) => {
    try {
    } catch (error) {
      // TODO: add logger here.
      console.log(error);
    }
  });

  router.post("/signup", async (req, res) => {
    try {
    } catch (error) {
      // TODO: add logger here.
      console.log(error);
    }
  });

  router.post("/reset", async (req, res) => {});

  return router;
}
