import mongoose, { connect } from "mongoose";

export async function initializeMongoConnection() {
  try {
    console.log("Initializing MongoDB Connection");

    await connect(process.env.MONGO_CONNECTION || "", {
      dbName: "nanite-sg1",
      appName: "main-cluster",
      retryWrites: true,
      writeConcern: { w: "majority" },
    });

    mongoose.connection.on("connected", () => {
      console.log("Successfully Established MongoDB Connection");
    });
  } catch (error) {
    // TODO: add logger here
    console.log(error);
  }
}
