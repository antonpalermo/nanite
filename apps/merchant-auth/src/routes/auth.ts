import express from "express";

import { Users } from "@packages/global-database/models";

export function routes() {
  const router = express.Router();

  router.post("/signin", async (req, res) => {
    try {
      const data = req.body.user;
      const user = await Users.findOne({ ...data });

      return res.status(200).json(user);
    } catch (error) {
      // TODO: add logger here.
      console.log(error);
    }
  });

  router.post("/signup", async (req, res) => {
    try {
      const data = req.body.user;
      const user = await Users.create({ ...data });

      return res.status(201).json(user);
    } catch (error) {
      // TODO: add logger here.
      console.log(error);
    }
  });

  router.post("/reset", async (req, res) => {});

  return router;
}
