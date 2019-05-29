import express from 'express';
import {
 purchase, car_sale, update_price, mark_post, 
} from '../controller/order';

const router = express.Router();

router.post('/api/v1/order', purchase);
router.post('/api/v1/car', car_sale);
router.patch('/api/v1/order/:id/price', update_price);
router.patch('/api/v1/car/:id/status', mark_post);

export default router;