import type { NextFunction, Request, Response } from "express"
import createHttpError from "http-errors";
import userModel from "./userModel.js";
import bcrypt from "bcrypt";
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import { config } from "../config/config.js";
import { error } from "node:console";



const createUser=async(req:Request,res:Response,next:NextFunction)=>{

    const {name,email,password}=req.body;

    //Validation 
    if(!name || !email || !password){
        const error=createHttpError(400,"All field are required!");
        return next(error);
    }

    //Database call 

    const user=await userModel.findOne({email:email});
    if(user){
        const error=createHttpError(400,"User already exists with this email.");
        return next(error);
    }

    //Password hash

    const hashedPassword=await bcrypt.hash(password,10); //salt round fo
    
    //Process
    const newUser=await userModel.create({
        name,email,password:hashedPassword
    });


    //Token generation JWT
    const token=sign({sub:newUser},config.jwtSecret as string,{expiresIn:"15m"});


    //Response
     res.json({accessToke:token});
  
}


const loginUser=async(req:Request,res:Response,next:NextFunction)=>{
    const {email,password}=req.body;
    let token;

    if(!email || !password){
        return next(createHttpError(400,"All field are required"));
    }

    try
    {
       const user=await userModel.findOne(email);
       if(!user){
        return next(createHttpError(404,"user not found!"));
       }

       const isMatch=await bcrypt.compare(password,user.password);

       if(!isMatch){
          return next(createHttpError(400,"Username or password incorrect"));
       }

       //create accesstoken 

      token=sign({sub:user._id},config.jwtSecret as string,{expiresIn:"15m"});

    }
    catch{
        console.log(error)
    }

    res.json({AccessToken:token});
}
export {createUser,loginUser};