import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()

const app=express()
const port = process.env.PORT || 8000;

//testing 
app.get("/", (req,res)=>{
    res.send("API is working");
})


//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.listen(port, ()=>{
    console.log("backend listening to port", port);
})