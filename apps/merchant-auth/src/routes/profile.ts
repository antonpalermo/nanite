import express from "express";

import { Users } from "@packages/global-database/models";

export function routes() {
  const router = express.Router();

  router.get("/details", async (req, res) => {
    try {
      const id = req.body.id;
      const details = await Users.findById(id);

      return res.status(200).json(details);
    } catch (error) {
      // TODO: add logger here.
      console.log(error);
    }
  });

  return router;
}
