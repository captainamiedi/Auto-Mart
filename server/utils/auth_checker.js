import jwt from 'jsonwebtoken';
import { responseMsg } from './helpers';

const authChecker = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  try {
    // console.log(token);
    const decode = await jwt.verify(token, 'bright');
    req.authData = decode;
    console.log(decode);
    next();
  } catch (error) {
    console.log(error);
    return responseMsg(res, 401, 'fail', 'Authentication Failed');
  }
};

export default authChecker;
