import express from 'express';
//import {
//  purchase, update_price, mark_post, seller_update_price,
//} from '../controller/dummy_dbController/order';
// eslint-disable-next-line import/named
//import { signup, login } from '../controller/dummy_dbController/user';
import { signup, login } from '../controller/dbController/user';
import {
  car_sale, mark_sold, update_car_price, specific_car, userHistory, view_status_price, delete_car,
} from '../controller/dbController/car';
import authCheck from '../utils/auth_checker';
import { purchase, update_price, userHistoryOrder } from '../controller/dbController/order';
import {
  signupValidator,
  loginValidator,
  carSaleValidator,
  updateValidator,
} from '../utils/validate';
import flag from '../controller/dbController/flag';
import { multerUploads } from '../utils/imageUpload';


const router = express.Router();

router.post('/api/v1/order', authCheck, purchase);
router.post('/api/v1/car', multerUploads, authCheck, carSaleValidator, car_sale);
router.patch('/api/v1/order/:order-id/price', update_price);
router.patch('/api/v1/car/:id/status', authCheck, mark_sold);
router.patch('/api/v1/car/:id/price', authCheck, update_car_price);
router.post('/api/v1/auth/signup', signup);
router.post('/api/v1/auth/signin', login);
router.get('/api/v1/car/:id', authCheck, specific_car);
router.get('/api/v1/car', authCheck, view_status_price);
router.get('/api/v1/user', authCheck, userHistory);
router.get('/api/v1/order/user', authCheck, userHistoryOrder);
router.post('/api/v1/flag', authCheck, flag);
router.delete('/api/v1/car/:id', authCheck, delete_car);

export default router;