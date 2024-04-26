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

//middleware function to handle errors
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});
