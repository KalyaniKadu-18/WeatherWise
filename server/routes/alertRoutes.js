import express from 'express';
import authMiddleware from '../middleware/authMiddleware/authMiddleware.js';
import {getWeatherAlerts} from '../controllers/alertController.js';

const router = express.Router();

router.get('/weatheralerts',getWeatherAlerts);

export default router;