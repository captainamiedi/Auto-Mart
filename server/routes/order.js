import express from 'express';
import purchase from '../controller/order';

const router = express.Router();

router.post('/api/v1/order', purchase);
router.get('/api/v1/order', (req, res, next)=>{
    res.status(200).json({
        success: 'true',
        orders: db,
    });
});
export default router;