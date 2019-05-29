import express from 'express';
<<<<<<< HEAD
import purchase from '../controller/order';
=======
import { purchase } from '../controller/order';
>>>>>>> change made on router

const router = express.Router();

router.post('/api/v1/order', purchase);

export default router;