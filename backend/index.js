import express from 'express'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoute from './routes/auth.js'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'


dotenv.config()

const app=express()
const port = process.env.PORT || 8000;
const corsOptions={
    origin:true,
    credentials:true
}

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
app.use(cors(corsOptions))
app.use(cookieParser())

app.use("/api/v1/auth",authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users",userRoute);
app.use("/api/v1/reviews",reviewRoute);
app.use("/api/v1/booking", bookingRoute)

app.listen(port, ()=>{
    connectToMongo();
    console.log("backend listening to port", port);
})