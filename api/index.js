import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect("mongodb+srv://harshdeepkaursdgi:harshdeep@mern-estate.nbnczmo.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=mern-estate");

const app=express();

app.listen("3000",()=>{
console.log("server is listening to 3000!!!");
})