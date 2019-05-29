import express from 'express';
import purchase from '../controller/order';

const router = express.Router();

router.post('/api/v1/order', purchase);

export default router;