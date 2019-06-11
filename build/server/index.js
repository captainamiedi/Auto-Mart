'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _swagger = require('./swagger.json');

var _swagger2 = _interopRequireDefault(_swagger);

var _order = require('./routes/order');

var _order2 = _interopRequireDefault(_order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const swaggerDoc = require('../swagger.json');
//import order from './controller/order';
//import buyerRoutes from '../server/routes/index';


var app = (0, _express2.default)();

app.use(_express2.default.json());
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());
// routes handling
//app.use('/buyer', buyerRoutes);
app.use('/', _order2.default);
app.use('/api/v1/doc', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default));
//app.get('/api/v1/order/:id', order.getOne);
//app.post('/api/v1/order', order.create);

//Error handling
app.use(function (req, res, next) {
  var error = new Error('not found');
  error.status = 404;
  next(error);
});

app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('server listening on port ' + port);
});

exports.default = app;