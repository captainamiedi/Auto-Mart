/* eslint-disable import/prefer-default-export */
import moment from 'moment';
import uuid from 'uuid';
import db from '../../model/dummy_db/cars';

export const specific_car = (req, res) =>{
  const id = parseInt(req.params.id, 10);
  let orderFound;
  const carData = [];
  db.map((order)=>{
    if (order.id === id) {
      orderFound = order;
      carData.push(orderFound);
      //orderIndex = index;
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
    carData,
    //orderIndex,
  });
};

// export const available_cars = (req, res)=>{
//   const {status} = req.query;
//   console.log(status);
//   let carFound;
//   const carData = [];
//   db.map((cars)=> {
//     if (cars.status === status) {
//       carFound = cars;
//       carData.push(carFound);
//     }
//   });
//   if (!carFound) {
//     res.status(404).json({
//       massage: 'not found',
//     });
//   }
//   res.status(200).json({
//     success: true,
//     message: 'handling GET request',
//     carData,
//   });
// };

export const price_range_cars = (req, res) => {
  const {min_price, max_price, status} = req.query;
  console.log(status, min_price, max_price);
  let carFound;
  const carData = [];
  db.map((cars) => {
    if ((cars.status === status) 
    && (cars.price >= min_price && cars.price <= max_price)) {
      carFound = cars;
      carData.push(carFound);
    } else if (cars.status === status) {
      carFound = cars;
      carData.push(carFound);
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
    carData,
  });
};

export const remove_cars = (req, res) => {
  const id = parseInt(req.params.id, 10);
  console.log(id);
  db.map((cars, index) => {
    if (cars.id === id) {
      db.splice(index, 1);
      return res.status(200).json({
        status: 200,
        data: 'car Ad successfully deleted',
      });
    }
  });
  res.status(404).json({
    success: false,
    message: 'not found',
  });
};
//export default specific_car;