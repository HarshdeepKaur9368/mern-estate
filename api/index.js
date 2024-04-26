import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.sign.js";


mongoose.connect("mongodb+srv://harshdeepkaursdgi:harshdeep@mern-estate.nbnczmo.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=mern-estate");

const app=express();

app.listen("3001",()=>{
console.log("server is listening to 3001!!!");
})

app.use(express.json());

//api route
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

