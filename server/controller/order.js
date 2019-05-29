import moment from 'moment';
import uuid from 'uuid';

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
