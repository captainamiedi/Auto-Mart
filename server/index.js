/* eslint-disable no-multiple-empty-lines */
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import timeout from 'express-timeout-handler';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import orderRouter from './routes/order';
import { cloudinaryConfig } from './utils/cloudinaryConfig';
//import buyerRoutes from '../server/routes/index';

const swaggerDoc = require('./swagger.json');

dotenv.config();

const app = express();

const options = {
  timeout: 20000,
  disable: ['write', 'setHeaders', 'send', 'json', 'end'],
};
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(cors());
app.use('*', cloudinaryConfig);
app.use(timeout.handler(options));
// routes handling
//app.use('/buyer', buyerRoutes);
app.use('/', orderRouter);
app.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
// app.post('/upload', multerUploads, (req, res) => {
//   console.log('req.body :', req.body);
// });
//app.get('/api/v1/order/:id', order.getOne);
//app.post('/api/v1/order', order.create);
//Error handling
app.use((req, res, next) => {
  const error = new Error('not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const port = process.env.PORT || 3000;

if (!module.parent) {
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
}

export default app;