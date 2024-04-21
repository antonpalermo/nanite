import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";

export default async function createServer() {
  const app = express();

  app.disable("x-powered-by");

  app
    .use(cors())
    .use(helmet())
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  return app;
}
