'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ message: 'first endpoint' });
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('server listening on port ' + port);
});

exports.default = app;