import express from 'express';
import {
  purchase, car_sale, update_price, 
  mark_post, seller_update_price,
} from '../controller/dbController/order';
// eslint-disable-next-line import/named
import { signup, login } from '../controller/dbController/user';
import {
  specific_car, available_cars, price_range_cars,
  remove_cars,
} from '../controller/dbController/cars';
import db from '../model/dummy_db/cars';
const router = express.Router();

router.post('/api/v1/order', purchase);
router.post('/api/v1/car', car_sale);
router.patch('/api/v1/order/:id/price', update_price);
router.patch('/api/v1/car/:id/status', mark_post);
router.patch('/api/v1/car/:id/price', seller_update_price);
router.post('/api/v1/signup', signup);
router.post('/api/v1/login', login);
router.get('/api/v1/car/:id', specific_car);
//router.get('/api/v1/car', available_cars);
router.get('/api/v1/car', price_range_cars);
router.delete('/api/v1/car/:id', remove_cars);


export default router;