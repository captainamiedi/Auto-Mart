import express from 'express';
import moment from 'moment';
import uuid from 'uuid';

const router = express.Router();

router.get('/api/v1/un', (req, res, next)=>{
    res.status(200).json({
        message: 'handling get request',
    });
});

router.post('/api/v1/order', (req, res, next)=>{
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


export default router;