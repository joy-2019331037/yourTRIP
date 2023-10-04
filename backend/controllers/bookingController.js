import Booking from '../models/Booking.js'

export const createBooking=async (req,res)=>{
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save()
        
        res.status(200).json({
            success:true,
            message:"Your tour is booked",
            data:savedBooking
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to book",
        })
        console.log(error)
    }
}

export const getMyBooking=async(req,res)=>{
    const userId=req.body.userId;

    try{
        const booking = await Booking.find({userId:userId});

        res.status(200).json({
            success:true,
            message:"All my booking info fetched successfully",
            data:booking
        })
    }catch(error){
        res.status(404).json({
            success:false,
            message:"failed to fetch my booking info",
        }) 
    }
}

//get Single booking
export const getBooking=async(req,res)=>{
    const id=req.params.id;

    try{
        const booking = await Booking.findById(id);

        res.status(200).json({
            success:true,
            message:"Booking info fetched successfully",
            data:booking
        })
    }catch(error){
        res.status(404).json({
            success:false,
            message:"failed to fetch booking info",
        }) 
    }
}

//get All bookings
export const getAllBookings=async(req,res)=>{
    try{
        const booking = await Booking.find();

        res.status(200).json({
            success:true,
            message:"All booking info fetched successfully",
            data:booking
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"failed to fetch booking info",
        }) 
    }
}