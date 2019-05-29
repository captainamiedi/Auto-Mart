import express from 'express';
import {purchase_order} from '../controller/order';


const router = express.Router();

router.post('/api/v1/car', purchase_order);


export default router;