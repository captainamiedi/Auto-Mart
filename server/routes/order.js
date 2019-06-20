import express from 'express';
//import {
//  purchase, update_price, mark_post, seller_update_price,
//} from '../controller/dummy_dbController/order';
// eslint-disable-next-line import/named
//import { signup, login } from '../controller/dummy_dbController/user';
import { signup, login } from '../controller/dbController/user';
import {
  car_sale, mark_sold, update_car_price, specific_car, view_all, view_status_price, delete_car,
} from '../controller/dbController/car';
import authCheck from '../utils/auth_checker';
import {purchase} from '../controller/dbController/order';
import { 
  signupValidator, 
  loginValidator, 
  carSaleValidator,
} from '../utils/validate';


const router = express.Router();

router.post('/api/v1/order', authCheck, purchase);
router.post('/api/v1/car', carSaleValidator, authCheck, car_sale);
//router.patch('/api/v1/order/:id/price', update_price);
router.patch('/api/v1/car/:id/status', authCheck, mark_sold);
router.patch('/api/v1/car/:id/price', authCheck, update_car_price);
router.post('/api/v1/signup', signupValidator, signup);
router.post('/api/v1/login', loginValidator, login);
router.get('/api/v1/car/:car_id', authCheck, specific_car);
router.get('/api/v1/car', authCheck, view_status_price);
router.get('/api/v1/all', authCheck, view_all);
router.delete('/api/v1/car/:id', authCheck, delete_car);
// router.get('/api/v1/login', (req, res)=>{
//   res.status(200).json({
    
//   });
// });
export default router;