import createServer from "@/server";
import { initializeMongoConnection } from "@packages/global-database";

async function main() {
  const server = await createServer();
  const port = process.env.PORT || 5555;

  await initializeMongoConnection()

  server.get("/status", (_, res) => {
    return res.status(200).json({ status: "healthy", online: true });
  });

  const serverListener = server.listen(port, () => {
    // TODO: improved loggin
    console.log(`Server Started on http://localhost:${port}`);
  });

  // graceful shutdown.
  process.on("SIGTERM", () => {
    console.log("SIGTERM signal recieved: Closing HTTP server");
    serverListener.close(() => {
      console.log("HTTP Server closed");
    });
  });
}

main().catch((e) => console.log(e));
