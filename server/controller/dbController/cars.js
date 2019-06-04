/* eslint-disable import/prefer-default-export */
import moment from 'moment';
import uuid from 'uuid';
import db from '../../model/dummy_db/cars';

export const specific_car = (req, res) =>{
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
    res.status(404).json({
      success: false,
      message: 'Not found',
    });
  }
  res.status(200).json({
    success: true,
    massage: 'handling GET request',
    orderFound,
    //orderIndex,
  });
};

export const available_cars = (req, res)=>{
  const id = req.query.status;
  //console.log(id);
  let carFound;
  db.map((cars)=> {
    if (cars.status === id) {
      carFound = cars;
    }
  });
  if (!carFound) {
    res.status(404).json({
      massage: 'not found',
    });
  }
  res.status(200).json({
    success: true,
    message: 'handling GET request',
    carFound,
  });
};

//export default specific_car;