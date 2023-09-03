import express from 'express'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoute from './routes/auth.js'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'

dotenv.config()

const app=express()
const port = process.env.PORT || 8000;


//dbConnetion
mongoose.set("strictQuery", false);

const connectToMongo= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,  
        })

        console.log('MongoDB connnected')
    }catch(err){
        console.log('MongoDB not connected')
    }
}

//testing 
app.get("/", (req,res)=>{
    res.send("API is working");
})


//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/auth",authRoute);
app.use("/tours", tourRoute);
app.use("/users",userRoute);

app.listen(port, ()=>{
    connectToMongo();
    console.log("backend listening to port", port);
})