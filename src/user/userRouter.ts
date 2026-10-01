import express from "express";
import { createUser } from "./userController.js";

const userRouter=express.Router();

//routes

userRouter.post("/register",createUser)
userRouter.post("/login",loginUser);



export default userRouter;