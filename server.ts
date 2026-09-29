import { config } from "./config/config.js";
import app from "./src/app.js";

const startSever=()=>{
    const port=config.port;
    app.listen(port,()=>{
        console.log("Running on port");
    })
}

startSever();