import app from "./src/app.js";

const startSever=()=>{
    const port=process.env.PORT || 3000;
    app.listen(port,()=>{
        console.log("Running on port");
    })
}

startSever();