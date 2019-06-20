import uuidv4 from 'uuid';
import db from '../../model/db/config';
import { orderResponseMsg } from '../../utils/helpers';


export const purchase = async (req, res) => {
  const getPriceQuery = 'SELECT id FROM cars WHERE id = $1';
  const valueId = [req.body.car_id];
  const createOrderQuery = 'INSERT INTO orders (id, car_id, status, offered, buyer) VALUES ($1, $2, $3, $4, $5) RETURNING *';


  try {
    const foundCar = await db.query(getPriceQuery, valueId);
    console.log(foundCar.rows[0]);
    const values = [
      uuidv4(),
      foundCar.rows[0].id,
      req.body.status,
      req.body.price,
      req.authData.id,
    ];
    console.log(req.authData.id, 'working......');
    const result = await db.query(createOrderQuery, values);
    console.log(result);
    return orderResponseMsg(res, 201, 'order successful', result.rows[0]);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const update_price = async (req, res) => {
  const getOrderQuery = 'SELECT id, price FROM orders WHERE id = $1 AND status = $2 AND buyer = $3';
  const updateQuery = 'UPDATE orders SET price = $1 WHERE id = $2 RETURNING *';

  try {
    console.log(req.authData.id, 'working ......');
    const response = await db.query(getOrderQuery, [req.params.id, 'pending', req.authData.id]);
    if (!response) {
      return orderResponseMsg(res, 404, 'order not found');
    }
    console.log(response, 'response');
    const updateValue = [
      req.body.price,
      response.rows[0].id,
    ];
    const result = await db.query(updateQuery, updateValue);
    console.log(result);
    const data = {
      id: result.rows[0].id,
      car_id: result.rows[0].car_id,
      status: result.rows[0].status,
      old_price_offered: response.rows[0].price,
      new_price_offered: result.rows[0].price,
    };
    return orderResponseMsg(res, 201, 'order successfully updated', data);
  } catch (error) {
    return res.status(400).json(error);
  }
};