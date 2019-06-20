import uuidv4 from 'uuid';
import db from '../../model/db/config';
import { orderResponseMsg } from '../../utils/helpers';


// eslint-disable-next-line import/prefer-default-export
export const purchase = async (req, res) => {
  const getPriceQuery = 'SELECT id FROM cars WHERE id = $1';
  const valueId = [req.body.car_id];
  const createOrderQuery = 'INSERT INTO orders (id, car_id, status, new_price_offered, buyer) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  

  try {
    const foundCar = await db.query(getPriceQuery, valueId);
    console.log(foundCar.rows[0]);
    const values = [
      uuidv4(),
      foundCar.rows[0].id,
      req.body.status,
      req.body.new_price_offered,
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
