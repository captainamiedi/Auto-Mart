import express from 'express';
import { purchase, car_sale, update_price } from '../controller/order';

const router = express.Router();

router.post('/api/v1/order', purchase);
router.post('/api/v1/car', car_sale);
router.patch('/api/v1/:id/price', update_price);

export default router;