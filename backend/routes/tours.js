import express from 'express'
import { createTour, deleteTour, getAllTours, getFeaturedTours, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();


router.post('/',createTour);
router.put('/:id',verifyAdmin,updateTour);
router.delete('/:id',verifyAdmin,deleteTour);
router.get('/:id',getSingleTour);
router.get('/',getAllTours);
router.get('/search/getTourBySearch', getTourBySearch);
router.get('/search/getFeaturedTours',getFeaturedTours);
router.get('/search/getTourCount',getTourCount);

export default router;