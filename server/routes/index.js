import express from 'express';
import order from '../controller/order';

const router = express.Router();

router.use('/api/v1/order', order.create);

export default router;
