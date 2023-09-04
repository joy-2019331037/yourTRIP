import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "successfully created new tour",
      data: savedTour,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "failed to create new tour" });
  }
};

//update new tour
export const updateTour = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "successfully updated tour info",
      data: updatedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "failed to update tour info" });
  }
};

//delete new tour
export const deleteTour = async (req, res) => {
  try {
    const id = req.params.id;

    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "successfully deleted tour info",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "failed to delete tour info" });
  }
};

//get Single tour
export const getSingleTour = async (req, res) => {
  try {
    const id = req.params.id;

    const singleTour = await Tour.findById(id). populate('reviews');

    res.status(200).json({
      success: true,
      message: "successfully fetched tour info",
      data: singleTour,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

//get All tours
export const getAllTours = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);

  try {
    const id = req.params.id;

    const Tours = await Tour.find({}).populate('reviews')
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: Tours.length,
      message: "successfully fetched all tour info",
      data: Tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

//get tour by search
export const getTourBySearch = async (req, res) => {
  //here i means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {

    //gte means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    },populate('reviews'));

    res.status(200).json({
      success: true,
      message: "successfully found out the tour!",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success:false,
      message:"no such tour"
    })
  }
};


//get Featured Tour
export const getFeaturedTours = async (req, res) => {

  try {
  

    const Tours = await Tour.find({featured:true}).populate('reviews').limit(8);

    res.status(200).json({
      success: true,
      message: "successfully fetched all tour info",
      data: Tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "not found" });
  }
};


//get tour count
export const getTourCount = async (req,res)=>{
  try {
    const tourCount  = await Tour.estimatedDocumentCount(); 

    res.status(200).json({
      success: true,
      count: tourCount,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to fetch tour count" });
  }
}