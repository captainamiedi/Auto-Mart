import moment from 'moment';
import uuid from 'uuid';
import db from '../model/dummy db/order';

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

export const update_price = (req, res)=>{
  const id = parseInt(req.params.id, 10);
  let orderFound;
  let orderIndex;
  db.map((order, index)=>{
    if (order.id === id) {
      orderFound = order;
      orderIndex = index;
    }
  });
  if (!orderFound) {
    return res.status(404).json({
      success: 'false',
      message: 'order not found',
    });
  }
  const updateOrder = {
    id: db.length + 1,
    email: req.body.email,
    state: req.body.state,
    model: req.body.model,
    manufacturer: req.body.manufacturer,
    old_price_offered: req.body.old_price_offered || orderFound.old_price_offered,
    new_price_offered: req.body.new_price_offered || orderFound.new_price_offered,
    status: req.body.status || orderFound.status,
    createdDate: moment.now(),
  };
  return res.status(200).json({
    success: 'true',
    message: 'handling update request',
    updateOrder,
  });
};

export const mark_post = (req, res, next)=>{
  const id = parseInt(req.params.id, 10);
  let orderFound;
  let orderIndex;
  db.map((order, index)=>{
    if (order.id === id) {
      orderFound = order;
      orderIndex = index;
    }
  });
  if (!orderFound) {
    return res.status(404).json({
      success: 'false',
      message: 'order not found',
    });
  }
  const updateOrder = {
    id: db.length + 1,
    email: req.body.email,
    state: req.body.state,
    model: req.body.model,
    manufacturer: req.body.manufacturer,
    price: req.body.new_price_offered,
    status: req.body.status || orderFound.status,
    createdDate: moment.now(),
  };
  return res.status(200).json({
    success: 'true',
    message: 'handling update request',
    updateOrder,
  });
};

export const seller_update_price = (req, res)=>{
  const id = parseInt(req.params.id, 10);
  let orderFound;
  let orderIndex;
  db.map((order, index)=>{
    if (order.id === id) {
      orderFound = order;
      orderIndex = index;
    }
  });
  if (!orderFound) {
    return res.status(404).json({
      success: 'false',
      message: 'order not found',
    });
  }
  const updateOrder = {
    id: db.length + 1,
    email: req.body.email,
    state: req.body.state,
    model: req.body.model,
    manufacturer: req.body.manufacturer,
    price: req.body.price || orderFound.price,
    status: req.body.status || orderFound.status,
    createdDate: moment.now(),
  };
  return res.status(200).json({
    success: 'true',
    message: 'handling update request',
    updateOrder,
  });
};  