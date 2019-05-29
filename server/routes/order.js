import express from 'express';
import { purchase, car_sale } from '../controller/order';

const router = express.Router();

router.post('/api/v1/order', purchase);
router.post('/api/v1/car', car_sale);

export default router;