import uuidv4 from 'uuid';
import db from '../../model/db/config';
import { orderResponseMsg } from '../../utils/helpers';


export const purchase = async (req, res) => {
  const getPriceQuery = 'SELECT id, price FROM cars WHERE id = $1';
  const valueId = [req.body.car_id];
  const createOrderQuery = 'INSERT INTO orders (id, car_id, status, amount, buyer) VALUES ($1, $2, $3, $4, $5) RETURNING *';


  try {
    const foundCar = await db.query(getPriceQuery, valueId);
    console.log(foundCar, 'oim here.......');
    console.log(foundCar.rows[0].price);
    const values = [
      uuidv4(),
      // foundCar.rows[0].id,
      req.body.car_id,
      req.body.status,
      req.body.amount,
      req.authData.id,
    ];
    if (!req.authData.id) {
      return orderResponseMsg(res, 401, 'fail', 'user unauthorise');
    }
    // console.log(req.authData.id, 'working......');
    // console.log(values);
    // console.log(req.body, 'orders body..........');
    const result = await db.query(createOrderQuery, values);
    // console.log(result.rows, 'order result');
    return orderResponseMsg(res, 201, 'order successful', result.rows[0]);
  } catch (error) {
    console.log(error, 'order .......');
    return res.status(400).json(error);
  }
};

export const update_price = async (req, res) => {
  const getOrderQuery = 'SELECT id, amount FROM orders WHERE id = $1 AND status = $2 AND buyer = $3';
  const updateQuery = 'UPDATE orders SET amount = $1 WHERE id = $2 RETURNING *';

  try {
    console.log(req.authData.id, 'working ......');
    const response = await db.query(getOrderQuery, [req.params.id, 'pending', req.authData.id]);
    if (!response) {
      return orderResponseMsg(res, 404, 'order not found');
    }
    // const {id} = response.rows[0];
    console.log(response.rows[0].id, 'response');
    const updateValue = [
      req.body.amount,
      // response.rows[0].id,
      req.params.id,
    ];
    console.log(req.body, 'order update body.....');
    const result = await db.query(updateQuery, updateValue);
    // console.log(result.rows, 'update order......');
    const data = {
      id: result.rows[0].id,
      car_id: result.rows[0].car_id,
      status: result.rows[0].status,
      old_price_offered: response.rows[0].amount,
      new_price_offered: result.rows[0].amount,
    };
    return orderResponseMsg(res, 200, 'order successfully updated', data);
  } catch (error) {
    console.log(error, 'update error');
    return res.status(400).json(error);
  }
};

export const userHistoryOrder = async (req, res) => {
  const query = 'SELECT cars.id, cars.image, cars.status, cars.model, cars.manufacturer, orders.id, orders.price, orders.status from orders INNER JOIN users ON orders.buyer = users.id JOIN cars ON orders.car_id = cars.id WHERE users.id = $1';
  const values = [req.authData.order_id];

  try {
    console.log(req.authData.id);
    const result = await db.query(query, values);
    console.log(result.rows);
    return orderResponseMsg(res, 200, 'successful', result.rows);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};