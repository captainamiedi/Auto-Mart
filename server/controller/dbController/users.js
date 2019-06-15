import uuidv4 from 'uuid';
import moment from 'moment';
import bcrypt from 'bcrypt';
import db from '../../model/db/config';


//eslint-disable-next-line import/prefer-default-export
export const signup = async (req, res) => {
  const getUser = 'SELECT * FROM users WHERE email = $1';
  const createUser = 'INSERT INTO users(id, first_name, last_name, email, password, address, is_admin) VALUES($1, $2, $3, $4, $5, $6, $7) returning *';
  const valueEmail = [req.body.email];

  
  try {
    const result = await db.query(getUser, valueEmail);
    //console.log(result);
    if (result.rows[0]) {
      return res.status(404).json({'message': 'email exist'});
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const valueCreate = [
      uuidv4(),
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      hashPassword,
      req.body.is_admin,
    ];
    const response = await db.query(createUser, valueCreate);
    return res.status(201).json(response.rows[0]);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const getLoginUser = 'SELECT * FROM users WHERE email = $1';
  const valueLog = [
    email,
  ];
  try {
    const foundUser = db.query(getLoginUser, valueLog);
    if (!foundUser.rows.length === 0) {
      return res.status(404).json({message: 'email not found'});
    }
    const comparePassword = await bcrypt.compare(password, foundUser.rows[0].password);
    if (comparePassword === false) {
      return res.status(404).json({message: 'invalid password'});
    }
    res.status(200).json({message: 'login successfull'});
  } catch (error) {
    return res.status(404).json(error);
  }
};