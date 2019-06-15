import moment from 'moment';
import userDb from '../../model/dummy_db/user';

export const signup = (req, res)=>{
  userDb.map((user, index)=>{
    if (user.email === req.body.email) {
      return res.status(409).json({
        message: 'user exist',
      });
    } 
  });
  const user = {
    id: userDb.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    address: req.body.address,
    email: req.body.email,
  };
  userDb.push(user);
  res.status(200).json({
    success: 'true',
    messsage: 'signup successful',
    user,
  });
}; 

export const login = (req, res)=>{
  userDb.map((user, index)=>{
    if (user.email !== req.body.email) {
      return res.status(409).json({
        message: 'user doesn\'t exist',
      });
    } 
    if (user.email === req.body.email) {
      return res.status(200).json({
        message: 'login successful',
      });
    }
  });
};
export default signup;