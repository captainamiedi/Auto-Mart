import uuidv4 from 'uuid';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import db from '../../model/db/config';
import { responseMsg, userResponseMsg } from '../../utils/helpers';

dotenv.config();
//eslint-disable-next-line import/prefer-default-export
export const signup = async (req, res) => {
  const getUserQuery = 'SELECT * FROM users WHERE email = $1';
  const createUserQuery = 'INSERT INTO users(id, first_name, last_name, email, password, address, is_admin) VALUES($1, $2, $3, $4, $5, $6, $7) returning *';
  const email = [req.body.email];

  
  try {
    const result = await db.query(getUserQuery, email);
    //console.log(result);
    if (result.rows[0]) {
      return responseMsg(res, 409, 'User already exist');
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = [
      uuidv4(),
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      hashPassword,
      req.body.address,
      req.body.is_admin,
    ];
    const response = await db.query(createUserQuery, newUser);
    //console.log(response, 'responding....');
    delete response.rows[0].password;
    const token = jwt.sign({email: response.rows[0].email}, 'bright', { expiresIn: '12h'});
    //console.log(token, 'token working........');
    const data = {
      token,
      id: response.rows[0].id,
      first_name: response.rows[0].first_name,
      last_name: response.rows[0].last_name,
      email: response.rows[0].email,
    };
    const respMessage = 'User signup successful';
    return userResponseMsg(res, 201, respMessage, data);
  } catch (error) {
    //console.log(error, 'erring.......');
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
    const foundUser = await db.query(getLoginUser, valueLog);
    if (!foundUser.rows.length === 0) {
      return responseMsg(res, 404, 'fail', 'Email not found');
    }
    const comparePassword = await bcrypt.compare(password, foundUser.rows[0].password);
    if (comparePassword === false) {
      return responseMsg(res, 404, 'fail', 'invalid password');
    }
    const token = jwt.sign({email: foundUser.rows[0].email}, 'bright', { expiresIn: '12h'});
    const data = {
      token,
      id: foundUser.rows[0].id,
      first_name: foundUser.rows[0].first_name,
      last_name: foundUser.rows[0].last_name,
      email: foundUser.rows[0].email,
    };
    const respMessage = 'User login successful';
    return userResponseMsg(res, 200, respMessage, data);
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
};