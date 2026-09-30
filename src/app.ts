import express,{type Request,type Response} from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";


const app=express();

app.get("/",(req:Request,res:Response)=>{
    res.json({message:"Welcome to page"});
});

app.use(globalErrorHandler);


export default app;