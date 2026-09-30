import mongoose from "mongoose";
import { config } from "./config.js";

const ConnectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error in connection to database", err);
    });

    await mongoose.connect(config.ConnectionURL as string);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

export default ConnectDB;
