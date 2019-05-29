import moment from 'moment';
import uuid from 'uuid';
import db from '../model/db/db';

// eslint-disable-next-line import/prefer-default-export
export const purchase = (req, res, next)=>{
  const order = {
      car_id: uuid.v1(),
      id: db.length + 1,
      price_offered: req.body.price_offered,
      price: req.body.price,
      status: req.body.status,
      createdDate: moment.now(),
  };
  db.push(order);
  res.status(200).json({
      sucess: 'true',
      message: 'handling post order request',
      order,
  });
};

export const car_sale = (req, res, next)=>{
      const order = {
      id: db.length + 1,
      email: req.body.email,
      state: req.body.state,
      model: req.body.model,
      manufacturer: req.body.manufacturer,
      price: req.body.price,
      status: req.body.status,
      createdDate: moment.now(),
      };
      db.push(order);
      res.status(200).json({
      sucess: 'true',
      message: 'handling post order request',
      order,
      });
};
