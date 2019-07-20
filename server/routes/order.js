import express from 'express';
//import {
//  purchase, update_price, mark_post, seller_update_price,
//} from '../controller/dummy_dbController/order';
// eslint-disable-next-line import/named
//import { signup, login } from '../controller/dummy_dbController/user';
import { signup, login } from '../controller/dbController/user';
import {
  car_sale, mark_sold, specific_car, userHistory, delete_car, update_car_price, view_status_price,
} from '../controller/dbController/car';
import authCheck from '../utils/auth_checker';
import { purchase, update_price, userHistoryOrder } from '../controller/dbController/order';
import {
  signupValidator,
  loginValidator,
  carSaleValidator,
  updateValidator,
  urlParamsChecker,
} from '../utils/validate';
import flag from '../controller/dbController/flag';
import { multerUploads } from '../utils/imageUpload';


const router = express.Router();

router.post('/api/v1/order', authCheck, purchase);
router.post('/api/v1/car', multerUploads, carSaleValidator, authCheck, car_sale);
router.patch('/api/v1/order/:id/price', urlParamsChecker, authCheck, update_price);
router.patch('/api/v1/car/:id/status', urlParamsChecker, authCheck, mark_sold);
router.patch('/api/v1/car/:id/price', urlParamsChecker, authCheck, update_car_price);
router.post('/api/v1/auth/signup', signupValidator, signup);
router.post('/api/v1/auth/signin', loginValidator, login);
router.get('/api/v1/car/:id', urlParamsChecker, authCheck, specific_car);
router.get('/api/v1/car', authCheck, view_status_price);
router.get('/api/v1/user', authCheck, userHistory);
router.get('/api/v1/order/user', authCheck, userHistoryOrder);
router.post('/api/v1/flag', authCheck, flag);
router.delete('/api/v1/car/:id', urlParamsChecker, authCheck, delete_car);

export default router;