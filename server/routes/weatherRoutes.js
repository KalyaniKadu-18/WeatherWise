import express, { Router } from 'express';
import { getForecastWeather, getWeather } from "../controllers/weatherController.js";
import authMiddleware from '../middleware/authMiddleware/authMiddleware.js';

const router = express.Router();

router.get('/liveweather',getWeather);
router.get('/forecast',getForecastWeather);

export default router;