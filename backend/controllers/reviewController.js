import Tour from "../models/Tour.js"
import Review from '../models/Review.js'


export const createReview=async (req,res)=>{
    const tourId=req.params.tourId
        const newReview = new Review({...req.body})
    try {
        const savedReview = await newReview.save();

        
        //after creating a new review, now update the review array of the tour
        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:savedReview._id}
        })
        res.status(200).json({
            success:true,
            message:"successfully submitted review",
            data:savedReview
        })
       
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to submit review"
        })
        
    }
} 

export const getReview=async(req,res)=>{
    const userId=req.body.userId;
    
    try{
        const allReviews = await Review.find({userId:userId});
       
        res.status(200).json({
            success:true,
            message:"All reviews by this user fetched successfully",
            data:allReviews
        })
    }catch(error){
        res.status(404).json({
            success:false,
            message:"failed to all reviews by this user",
        }) 
    }
}