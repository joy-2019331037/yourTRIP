import User from "../models/User.js";

//create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "successfully created new User",
      data: savedUser,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "failed to create new User" });
  }
};

//update new User
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "successfully updated User info",
      data: updatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "failed to update User info" });
  }
};

//delete new User
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "successfully deleted User info",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "failed to delete User info" });
  }
};

//get Single User
export const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;

    const singleUser = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "successfully fetched User info",
      data: singleUser,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

//get All Users
export const getAllUsers = async (req, res) => {


  try {
    const id = req.params.id;

    const users = await User.find({})

    res.status(200).json({
      success: true,
      count: users.length,
      message: "successfully fetched all User info",
      data: users,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "not found" });
  }
};