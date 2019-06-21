import chai from 'chai';
import chaiHttp from 'chai-http';
import pg from 'pg';
import app from '../../index';


chai.use(chaiHttp);
chai.should();

const user = {
  first_name: 'math',
  last_name: 'peter',
  email: 'test1111@gmail.com',
  password: '1NIGeria@',
  address: '10 james street',
  is_admin: true,
};

describe('USERS SIGNUP', () => {
  it('should allow user signup', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should not allow user signup without email', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .send({
        first_name: 'peter',
        last_name: 'dest',
        email: '',
        password: '1234gA@2',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should not allow user signup without password', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .send({
        first_name: 'peter',
        last_name: 'dest',
        email: 'test11@gmail.com',
        password: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('LOGIN USER', () => {
  it('should allow user to login', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should not allow a user to login without password', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send({
        email: 'test11@gmail.com',
        password: '',
      })
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it('should not allow a user to login without email', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send({
        email: '',
        password: '12345678aB@',
      })
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});