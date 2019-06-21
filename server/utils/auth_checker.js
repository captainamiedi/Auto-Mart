import jwt from 'jsonwebtoken';
import { responseMsg } from './helpers';

const authChecker = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, 'bright');
    req.authData = decode;
    //console.log(decode);
    next();
  } catch (error) {
    //console.log(error);
    return responseMsg(res, 401, 'fail', 'Authentication Failed');
  }
};

export default authChecker;
