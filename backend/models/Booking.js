import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,

    },
    tourName: {
        type: String,
        required: true,
      },
    tourPhoto:{
      type:String
    },
    fullName: {
      type: String,
      required: true,
    },
    phone:{
        type:Number,
        required: true
    },
    bookAt:{
        type:Date,
        
    },
    guestSize:{
        type:Number,
        required: true
    },

  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
