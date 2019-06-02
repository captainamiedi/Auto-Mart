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

export default specific_car;