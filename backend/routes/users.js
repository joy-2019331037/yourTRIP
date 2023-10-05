import express from 'express'
import { createUser,updateUser, deleteUser, getAllUsers, getSingleUser, updateDP} from '../controllers/userController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';


const router = express.Router();

// router.post('/',createUser);
router.put('/:id',verifyUser,updateUser);
router.put('/updateDP/:id',updateDP);
router.delete('/:id',verifyUser,deleteUser);
router.get('/getSingleUser/:id',getSingleUser);
router.get('/',verifyAdmin,getAllUsers);

export default router;