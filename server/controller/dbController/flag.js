import uuidv4 from 'uuid';
import db from '../../model/db/config';
import { flagResponseMsg } from '../../utils/helpers';

const flag = async (req, res) => {
  const query = 'INSERT INTO flags (id, created_on, reason, description, car_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const getQuery = 'SELECT id FROM cars WHERE id = $1';

  try {
    const response = await db.query(getQuery, [req.body.car_id]);
    const value = [
      uuidv4(),
      new Date(),
      req.body.reason,
      req.body.description,
      response.rows[0].id,
    ];
    const result = await db.query(query, value);
    return flagResponseMsg(res, 200, 'success', result.rows[0]);
  } catch (error) {
    //console.log(error);
    return res.status(400).json(error);
  }
};

export default flag;
