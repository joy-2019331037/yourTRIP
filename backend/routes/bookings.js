import express from 'express'

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createBooking, getAllBookings, getBooking, getMyBooking } from '../controllers/bookingController.js';
const router=express.Router()

router.post("/",verifyUser, createBooking)
router.get("/:id",verifyUser, getBooking)
router.post("/getMyBookings",verifyUser, getMyBooking)

router.get("/",verifyAdmin, getAllBookings)

export default router;