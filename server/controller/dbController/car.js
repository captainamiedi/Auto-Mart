import uuidv4 from 'uuid';
import db from '../../model/db/config';
import { carResponseMsg } from '../../utils/helpers';

export const car_sale = async (req, res) =>{
  //const selectUser = 'SELECT id FROM users WHERE email = $1';
  // const email = [req.body.email];
  const carSaleQuery = 'INSERT INTO cars (id, state, status, price, manufacturer, model, body_type, created_date, owner_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *';
 

  try {
    const values = [
      uuidv4(),
      req.body.state,
      req.body.status,
      req.body.price,
      req.body.manufacturer,
      req.body.model,
      req.body.body_type,
      new Date(),
      req.authData.id,
    ];
    const result = await db.query(carSaleQuery, values);
    //console.log(result);
    return carResponseMsg(res, 201, 'successfully created', result.rows[0]);
  } catch (error) {
    //console.log(error);
    return res.status(400).json(error);
  }
};

export const mark_sold = async (req, res) => {
  // const { id } = req.params;
  const updateMarkQuery = 'UPDATE cars SET status = $1 WHERE id = $2 RETURNING *';
  const values = [
    req.body.status,
    req.params.id,
  ];
  try {
    const result = await db.query(updateMarkQuery, values);
    console.log(result);
    return carResponseMsg(res, 200, 'successful update', result.rows[0]);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const update_car_price = async (req, res) => {
  const updatePriceQuery = 'UPDATE cars SET price = $1 WHERE id = $2 RETURNING *';
  const values = [
    req.body.price,
    req.params.id,
  ];
  try {
    const result = await db.query(updatePriceQuery, values);
    return carResponseMsg(res, 200, 'successful update', result.rows[0]);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const specific_car = async (req, res) => {
  const query = 'SELECT * FROM cars WHERE id = $1';
  //const viewQuery = 'SELECT * FROM cars where status = $1';
  //const viewValues = [req.query];
  const values = [req.params.car_id];

  try {
    // const result = await db.query(query, values);
    // return carResponseMsg(res, 200, 'successful', result.rows[0]);
    // if (viewValues === 'sold') {
    //   const viewStatus = await db.query(viewQuery, viewValues);
    //   return carResponseMsg(res, 200, 'successful', viewStatus.rows[0]);
    // } 
    const result = await db.query(query, values);
    console.log(result.rows);
    return carResponseMsg(res, 200, 'successful', result.rows[0]);
  } catch (error) {
    return res.status(400).json(error);
  }
}; 

export const view_status = async (req, res) => {
  const view = 'SELECT * FROM cars WHERE status =$1';
  const value = [req.query];

  try {
    console.log(value);
    const result = await db.query(view, [req.query.status]);
    return carResponseMsg(res, 200, 'successful', result.rows);
    //console.log(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const view_status_price = async (req, res) => {
  const view = 'SELECT * FROM cars WHERE status =$1 AND price  BETWEEN $2 AND $3';
  const viewStatusQuery = 'SELECT * FROM cars WHERE status =$1';
  const value = [
    req.query.status,
    req.query.min_price,
    req.query.max_price,
  ];

  try {
    console.log(req.query.status);
    if ((req.query.status) && (!req.query.min_price) && (!req.query.max_price)) {
      const viewStatus = await db.query(viewStatusQuery, [req.query.status]);
      console.log(viewStatus.rows, '1st case');
      return carResponseMsg(res, 200, 'successful', viewStatus.rows);
    }
    console.log(value, 'hjghjjgjd....');
    if ((req.query.status) && (req.query.min_price) && (req.query.max_price)) {
      //console.log(value);
      const result = await db.query(view, value);
      console.log(result.rows, '2nd case');
      return carResponseMsg(res, 200, 'successful', result.rows);
    //console.log(result);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
