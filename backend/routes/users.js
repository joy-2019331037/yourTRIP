import express from 'express'
import { createUser,updateUser, deleteUser, getAllUsers, getSingleUser} from '../controllers/userController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.post('/',createUser);
router.put('/:id',verifyUser,updateUser);
router.delete('/:id',verifyUser,deleteUser);
router.get('/:id',verifyUser,getSingleUser);
router.get('/',verifyAdmin,getAllUsers);

export default router;