import express from 'express';
import {
  purchase, car_sale, update_price, mark_post, seller_update_price,
} from '../controller/dummy_dbController/order';
// eslint-disable-next-line import/named
//import { signup, login } from '../controller/dummy_dbController/user';
import { signup, login } from '../controller/dbController/user';
import { signupValidator, loginValidator } from '../utils/validate';

const router = express.Router();

router.post('/api/v1/order', purchase);
router.post('/api/v1/car', car_sale);
router.patch('/api/v1/order/:id/price', update_price);
router.patch('/api/v1/car/:id/status', mark_post);
router.patch('/api/v1/car/:id/price', seller_update_price);
router.post('/api/v1/signup', signupValidator, signup);
router.post('/api/v1/login', loginValidator, login);
// router.get('/api/v1/login', (req, res)=>{
//   res.status(200).json({
    
//   });
// });
export default router;