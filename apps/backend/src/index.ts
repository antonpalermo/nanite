import createServer from "@/server";

async function main() {
  const server = await createServer();
  const port = process.env.PORT || 5555;

  server.get("/status", (_, res) => {
    return res.status(200).json({ status: "healthy", online: true });
  });

  server.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
  });
}

main().catch((e) => console.log(e));
