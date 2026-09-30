import express,{type Request,type Response} from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import userRouter from "./user/userRouter.js";


const app=express();

app.use(express.json());

app.get("/",(req:Request,res:Response)=>{
    res.json({message:"Welcome to page"});
});

app.use("/api/users",userRouter);

app.use(globalErrorHandler);


export default app;