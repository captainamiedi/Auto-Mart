import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('GET ALL CARS', () => {
  it('should allow user to access all cars', (done) => {
    chai.request(app)
      .get('/api/v1/all')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should allow user to access specific car', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/car/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
  it('should allow user to access specific car with price range', (done) => {
    //const status = 'available';
    //const min_price = '1,000';
    //const max_price = '100,000';
    //const {status, min_price, max_price} = 'available, 1,000, 100,000';
    chai.request(app)
      // eslint-disable-next-line no-sequences
      .get('/api/v1/cars?status=available')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
  it('should allow user to access specific car with price range', (done) => {
    chai.request(app)
      .get('/api/v1/cars?status=available&min_price=1,000&max_price=100,000')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
});

describe('CREATE ORDERS AND CAR ADS', () => {
  it('should allow user to create ADS', (done) => {
    chai.request(app)
      .post('/api/v1/car')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
  it('should allow user to create purchase order', (done) => {
    chai.request(app)
      .post('/api/v1/order')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
});

describe('UPDATE ORDERS AND CARS INFORMATION', () => {
  it('should user update purchase price', (done) =>{
    const id = 1;
    chai.request(app)
      .patch(`/api/v1/order/${id}/price`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
  it('should user update car price', (done) =>{
    const id = 1;
    chai.request(app)
      .patch(`/api/v1/car/${id}/price`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
  it('should user update car status', (done) =>{
    const id = 1;
    chai.request(app)
      .patch(`/api/v1/car/${id}/status`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
});

describe('DELETE A SPECIFIC CAR', () => {
  it('should user delete a specific car', (done) =>{
    const id = 1;
    chai.request(app)
      .delete(`/api/v1/cars/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
});