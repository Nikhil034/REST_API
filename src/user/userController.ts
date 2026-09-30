import type { NextFunction, Request, Response } from "express"
import createHttpError from "http-errors";


const createUser=async(req:Request,res:Response,next:NextFunction)=>{

    const {name,email,password}=req.body;

    console.log(req.body);

    //Validation 
    if(!name || !email || !password){
        const error=createHttpError(400,"All field are required!");
        return next(error);
    }

    //Process

    //Response

  
}

export {createUser};