import { config } from "./config/config.js";
import ConnectDB from "./config/db.js";
import app from "./src/app.js";

const startSever=async()=>{
    await ConnectDB();
    const port=config.port;
    app.listen(port,()=>{
        console.log("Running on port");
    })
}

startSever();