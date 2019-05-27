import express from 'express';
import moment from 'moment';
import uuid from 'uuid';
import order from '../controller/order';

const router = express.Router();

router.get('/api/v1/un', (req, res, next)=>{
    res.status(200).json({
        message: 'handling get request',
    });
});

router.post('/api/v1/car', (req, res, next)=>{
    const Ads = {
        car_id: uuid.v1(),
        email: req.body.email,
        state: req.body.state,
        model: req.body.model,
        manufacturer: req.body.manufacturer,
        price: req.body.price,
        status: req.body.status,
        createdDate: moment.now(),
    };
    res.status(200).json({
        message: 'handling post request',
        createdAds: Ads,
    });
});
router.post('/api/v1/order', (req, res, next)=>{
    const order = {
        car_id: uuid.v1(),
        price: req.body.price,
        price_offered: req.body.price_offered,
        status: req.body.status,
        createdDate: moment.now(),
    };
    res.status(200).json({
        message: 'handling post request',
        createdorder: order,
    });
});


export default router;