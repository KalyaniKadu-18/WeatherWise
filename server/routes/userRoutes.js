import express from 'express';
import{registerUser} from '../controllers/userController.js';
import authMidleware from '../middleware/authMiddleware/authMidleware.js'

const router = express.Router();

router.post('/register',registerUser);

export default router;