import express from 'express';
//import {
//  purchase, update_price, mark_post, seller_update_price,
//} from '../controller/dummy_dbController/order';
// eslint-disable-next-line import/named
//import { signup, login } from '../controller/dummy_dbController/user';
import { signup, login } from '../controller/dbController/user';
import {
  car_sale, mark_sold, specific_car, userHistory, view_status_price, delete_car,
} from '../controller/dbController/car';
import authCheck from '../utils/auth_checker';
import { purchase, update_price, userHistoryOrder } from '../controller/dbController/order';
// import {
//   signupValidator,
//   loginValidator,
//   carSaleValidator,
//   updateValidator,
// } from '../utils/validate';
import flag from '../controller/dbController/flag';
import { multerUploads } from '../utils/imageUpload';


const router = express.Router();

router.post('/order', authCheck, purchase);
router.post('/car', multerUploads, authCheck, car_sale);
router.patch('/order/:order-id/price', update_price);
router.patch('/car/:id/status', authCheck, mark_sold);
// router.patch('/car/:id/price', authCheck, update_car_price);
router.post('/auth/signup', signup);
router.post('/auth/signin', login);
router.get('/car/:id', authCheck, specific_car);
// router.get('/car', authCheck, view_status_price);
router.get('/user', authCheck, userHistory);
router.get('/order/user', authCheck, userHistoryOrder);
router.post('/flag', authCheck, flag);
router.delete('/car/:id', authCheck, delete_car);

export default router;