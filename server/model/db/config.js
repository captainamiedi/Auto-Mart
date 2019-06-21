import { Pool } from 'pg';

require('dotenv').config();

let conString;
const devConString = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'automart',
  password: 'postgres',
  port: 5432,
};

const devTestConString = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'db_test',
  password: 'postgres',
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
  console.log(`database connected successfully to ${process.env.NODE_ENV}`);
});


//export { cloudinaryConfig, uploader };
export default pool;
