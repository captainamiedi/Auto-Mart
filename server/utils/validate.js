/* eslint-disable import/prefer-default-export */
import { responseMsg } from './helpers';

const isValidEmail = input => /\S+@\S+\.\S/.test(input);

const lowerCaseChecker = input => /[a-z]/.test(input);

const upperCaseChecker = input => /[A-Z]/.test(input);

const numChecker = input => /[0-9]/.test(input);

const specCharChecker = input => /[$@#&!]/.test(input);

const uuidRegex = /^[0-9A-F]{8}-[0-9A-F]{4}-[1-5][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

const uuidChecker = input => uuidRegex.test(input);

const updateInputRegex = /\b(new|processing|cancelled|complete)\b/;

const isValidUpdateInput = input => updateInputRegex.test(input);


/**
 * @description This function validate user signup field
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
export const signupValidator = (req, res, next) => {
  const {
    first_name, last_name, address, email, password,
  } = req.body;

  if (!first_name || !first_name.trim()) {
    return responseMsg(res, 400, 'fail', 'First name is required');
  }
  if (!last_name || !last_name.trim()) {
    return responseMsg(res, 400, 'fail', 'Last name is required');
  }
  if (!address || !address.trim()) {
    return responseMsg(res, 400, 'fail', 'address is required');
  }
  if (!email || !email.trim()) {
    return responseMsg(res, 400, 'fail', 'email is required');
  }
  if (!password || !password.trim()) {
    return responseMsg(res, 400, 'fail', 'password is required');
  }
  // if (!location || !location.trim()) {
  //   return responseMsg(res, 400, 'fail', 'password is required');
  // }
  if (!isValidEmail(email)) {
    return responseMsg(res, 400, 'fail', 'email is not valid');
  }
  if (password.length < 8) {
    return responseMsg(res, 400, 'fail', 'password must not be less than 8 character');
  }
  if (!lowerCaseChecker(password)) {
    return responseMsg(res, 400, 'fail', 'password must contain at least a lowercase');
  }
  if (!upperCaseChecker(password)) {
    return responseMsg(res, 400, 'fail', 'Password must contain at least an uppercase');
  }
  if (!numChecker(password)) {
    return responseMsg(res, 400, 'fail', 'Password must contain at least a number');
  }
  if (!specCharChecker(password)) {
    return responseMsg(res, 400, 'fail', 'Password must contain at least one \'$\',\'@\',\'#\',\'&\',or\'!\'');
  }

  next();
};

/**
 * @description This function validate user signup input field
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
export const loginValidator = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !email.trim()) {
    return responseMsg(res, 400, 'fail', 'email is required');
  }
  if (!password || !password.trim()) {
    return responseMsg(res, 400, 'fail', 'password is required');
  }
  if (!isValidEmail(email)) {
    return responseMsg(res, 400, 'fail', 'email is not valid');
  }
  if (password.length < 8) {
    return responseMsg(res, 400, 'fail', 'password must not be less than 8 character');
  }
  if (!lowerCaseChecker(password)) {
    return responseMsg(res, 400, 'fail', 'password must contain at least a lowercase');
  }
  if (!upperCaseChecker(password)) {
    return responseMsg(res, 400, 'fail', 'Password must contain at least an uppercase');
  }
  if (!numChecker(password)) {
    return responseMsg(res, 400, 'fail', 'Password must contain at least a number');
  }
  if (!specCharChecker(password)) {
    return responseMsg(res, 400, 'fail', 'Password must contain at least one \'$\',\'@\',\'#\',\'&\',or\'!\'');
  }
  next();
};

export const carSaleValidator = (req, res, next) => {
  const {
    model, manufacturer, price, state, status, body_type, 
  } = req.body;
  if (!model || !model.trim()) {
    return responseMsg(res, 400, 'fail', 'car model is required');
  }
  if (!manufacturer || !manufacturer.trim()) {
    return responseMsg(res, 400, 'fail', 'car manufacturer is required');
  }
  if (!price || !price.trim()) {
    return responseMsg(res, 400, 'fail', 'price is required');
  }
  if (!state || !state.trim()) {
    return responseMsg(res, 400, 'fail', 'car state is requiredd');
  }
  if (!status || !status.trim()) {
    return responseMsg(res, 400, 'fail', 'car status is required');
  }
  if (!body_type || !body_type.trim()) {
    return responseMsg(res, 400, 'fail', 'car body_type is required');
  }
  next();
};