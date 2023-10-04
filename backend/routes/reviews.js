import express from 'express'
import { createReview, getReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router=express.Router()

router.post("/:tourId",verifyUser, createReview )
router.post("/",verifyUser, getReview)
export default router;