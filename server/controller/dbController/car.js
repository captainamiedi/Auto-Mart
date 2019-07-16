import uuidv4 from 'uuid';
import db from '../../model/db/config';
import { uploader } from '../../utils/cloudinaryConfig';
import { dataUri } from '../../utils/imageUpload';
import { carResponseMsg } from '../../utils/helpers';

export const car_sale = async (req, res) => {
  //const selectUser = 'SELECT id FROM users WHERE email = $1';
  // const email = [req.body.email];
  const carSaleQuery = 'INSERT INTO cars (state, image, price, status, manufacturer, model, body_type, created_date, owner_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *';
  const carSaleQueryImg = 'INSERT INTO cars (state, image, price, status, manufacturer, model, body_type, created_date, owner_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *';


  try {
    let image;
    if (!req.authData.id) {
      return carResponseMsg(res, 401, 'fail', 'user unauthorise');
    }
    if (req.file) {
      const file = dataUri(req).content;
      image = await uploader.upload(file);
    }

    console.log(image, 'image....');
    // console.log(image, 'image....');

    const values = [
      req.body.state,
      req.body.img_url,
      req.body.price,
      req.body.status,
      req.body.manufacturer,
      req.body.model,
      req.body.body_type,
      new Date(),
      req.authData.id,
    ];
    console.log(req.body, 'car body......');
    const result = await db.query(carSaleQuery, values);
    console.log(result.rows, 'result...');
    return carResponseMsg(res, 201, 'successfully created', result.rows[0]);
    // }
  } catch (error) {
    console.log(error, 'error---===:::::');
    return res.status(400).json(error);
  }
};

export const mark_sold = async (req, res) => {
  // const { id } = req.params;
  const updateMarkQuery = 'UPDATE cars SET status = $1 WHERE id = $2 RETURNING *';
  const values = [
    'sold',
    req.params.id,
  ];
  try {
    console.log(req.body, 'marked sold');
    console.log(values);
    const result = await db.query(updateMarkQuery, values);
    // console.log(result);
    return carResponseMsg(res, 200, 'successful update', result.rows[0]);
  } catch (error) {
    console.log(error, 'contolller.......');
    return res.status(400).json(error);
  }
};

// export const update_car_price = async (req, res) => {
//const updatePriceQuery = 'UPDATE cars SET price = $1 WHERE id = $2 AND owner_id = $3 RETURNING *';
//   const values = [
//     req.body.price,
//     req.params.id,
//     req.authData.id,
//   ];
//   try {
//     console.log(req.body, 'updated price');
//     console.log(values);
//     const result = await db.query(updatePriceQuery, values);
//     // console.log(result.rows, 'contoller resuult........');
//     return carResponseMsg(res, 200, 'successful update', result.rows[0]);
//   } catch (error) {
//     console.log(error, 'controller.........');
//     return res.status(400).json(error);
//   }
// };

export const specific_car = async (req, res) => {
  const query = 'SELECT * FROM cars WHERE id = $1';
  //const viewQuery = 'SELECT * FROM cars where status = $1';
  //const viewValues = [req.query];
  const values = [req.params.id];

  try {
    // const result = await db.query(query, values);
    // return carResponseMsg(res, 200, 'successful', result.rows[0]);
    // if (viewValues === 'sold') {
    //   const viewStatus = await db.query(viewQuery, viewValues);
    //   return carResponseMsg(res, 200, 'successful', viewStatus.rows[0]);
    // } 
    const result = await db.query(query, values);
    console.log(result.rows, 'result oooooooooo');
    return carResponseMsg(res, 200, 'successful', result.rows[0]);
  } catch (error) {
    //console.log(error, 'controller.....');
    return res.status(400).json(error);
  }
};

// export const view_status = async (req, res) => {
//   const view = 'SELECT * FROM cars WHERE status =$1';
//   const value = [req.query];

//   try {
//     console.log(value);
//     const result = await db.query(view, [req.query.status]);
//     return carResponseMsg(res, 200, 'successful', result.rows);
//     //console.log(result);
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// };

// export const view_status_price = async (req, res) => {
//   const query = 'SELECT * FROM cars ORDER BY created_date DESC LIMIT 10';
//const view = 'SELECT * FROM cars WHERE status =$1 AND price  BETWEEN $2 AND $3 
// ORDER BY created_date DESC LIMIT 10';
//const viewStatusQuery = 'SELECT * FROM cars WHERE status =$1 ORDER BY created_date DESC LIMIT 10';
//const stateQuery = 'SELECT * FROM cars WHERE status = $1 AND state = $2 ORDER BY created_date DESC
//  LIMIT 10';
//   const value = [
//     req.query.status,
//     req.query.min_price,
//     req.query.max_price,
//   ];

//   try {
//     console.log(req.query.status, 'get car status');
//     if ((req.query.status) && (!req.query.min_price) && (!req.query.max_price)) {
//       const viewStatus = await db.query(viewStatusQuery, [req.query.status]);
//       return carResponseMsg(res, 200, 'successful', viewStatus.rows);
//     }
//     console.log(req.query.status, req.query.min_price, 'get car status price');
//     if ((req.query.status) && (req.query.min_price) && (!req.query.max_price)) {
//       const result = await db.query(view, value);
//       return carResponseMsg(res, 200, 'successful', result.rows);
//     }
//     if ((req.query.status === 'available') && (req.query.state === 'new')) {
//       const viewState = await db.query(stateQuery, ['available', 'used']);
//       return carResponseMsg(res, 200, 'successful', viewState.rows);
//     }
//     console.log(req.authData.is_admin, 'get car status admin');
//     if (req.authData.is_admin === true) {
//       const resultAll = await db.query(query);
//       return carResponseMsg(res, 200, 'successful', resultAll.rows);
//     } if (req.authData.is_admin === 'false') {
//       return carResponseMsg(res, 404, 'fail', 'you are not an admin');
//     }
//   } catch (error) { 
//     console.log(error, 'get car......');
//     return res.status(400).json(error);
//   }
// };

export const view_all = async (req, res) => {
  const query = 'SELECT * FROM cars';
  try {
    const result = await db.query(query);
    return carResponseMsg(res, 200, 'successful', result.rows);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const delete_car = async (req, res) => {
  const query = 'DELETE FROM cars WHERE id = $1';
  const value = [req.params.id];

  try {
    const result = await db.query(query, value);
    return carResponseMsg(res, 200, 'Car Ads successful deleted');
  } catch (error) {
    console.log(error, 'delete car .....');
    return res.status(400).json(error);
  }
};

export const userHistory = async (req, res) => {
  const query = 'SELECT cars.id, cars.image, cars.price, cars.model, cars.manufacturer, cars.status, cars.state FROM cars INNER JOIN users ON cars.owner_id = users.id WHERE users.id = $1 ORDER BY created_date DESC';
  const values = [req.authData.id];
  // const query = 'SELECT * FROM cars';
  try {
    console.log(req.authData.id);
    const result = await db.query(query, values);
    // console.log(result.rows);
    return carResponseMsg(res, 200, 'successful', result.rows);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};