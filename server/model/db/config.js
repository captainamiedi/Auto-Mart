import { Pool } from 'pg';

// require('dotenv').config();

// let conString;

// const devConString = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// };

// // const devTestConString = process.env.DATABASE_URL;

// const devTestConString = {
//   user: process.env.DB_USER_TEST,
//   host: process.env.DB_HOST_TEST,
//   database: process.env.DB_TEST,
//   password: process.env.DB_PASSWORD_TEST,
//   port: process.env.DB_PORT_TEST,
// };


// if (process.env.NODE_ENV === 'test') {
//   conString = devTestConString;
// } else if (process.env.NODE_ENV === 'production') {
//   conString = { connectionString: process.env.DATABASE_URL, ssl: true };
// } else {
//   conString = devConString;
// }
let conString;
const devConString = {
  user: 'bright',
  host: '127.0.0.1',
  database: 'AutoMart',
  password: '1NIGeria',
  port: 5432,
};

const devTestConString = {
  user: 'bright',
  host: '127.0.0.1',
  database: 'db_test',
  password: '1NIGeria',
  port: 5432,
};

if (process.env.NODE_ENV === 'test') {
  conString = devTestConString;
} else if (process.env.NODE_ENV === 'production') {
  conString = { connectionString: process.env.DATABASE_URL, ssl: true };
} else {
  conString = devConString;
}
const pool = new Pool(conString);

pool.on('connect', () => {
  console.log('database connected successfully');
});

export default pool;

// import { Pool } from 'pg';
// import dotenv from 'dotenv';

// dotenv.config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export default {
//   /**
//    * DB Query
//    * @param {object} req
//    * @param {object} res
//    * @returns {object} object 
//    */
//   query(text, params) {
//     return new Promise((resolve, reject) => {
//       pool.query(text, params)
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   },
// };