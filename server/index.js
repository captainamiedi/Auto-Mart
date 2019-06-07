import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerDoc from './swagger.json';
import orderRouter from './routes/order';
//const swaggerDoc = require('../swagger.json');
//import order from './controller/order';
//import buyerRoutes from '../server/routes/index';


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// routes handling
//app.use('/buyer', buyerRoutes);
app.use('/', orderRouter);
app.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
//app.get('/api/v1/order/:id', order.getOne);
//app.post('/api/v1/order', order.create);

//Error handling
app.use((req, res, next) => {
  const error = new Error('not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next)=>{
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

export default app;