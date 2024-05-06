import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";

import { Auth, Profile } from "@/routes";

export default async function createServer() {
  const app = express();

  app.disable("x-powered-by");
  app.set("trust proxy", true);

  app
    .use(cors())
    .use(helmet())
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  app.use("/auth", Auth.routes()).use("/profile", Profile.routes());

  return app;
}
