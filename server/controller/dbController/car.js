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