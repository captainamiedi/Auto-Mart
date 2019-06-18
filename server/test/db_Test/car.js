import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';


chai.use(chaiHttp);
chai.should();

const user = {
  email: 'test22@gmail.com',
  password: '1NIGeria@',
};

describe('CREATE ADS', () => {
  it('should allow signup user create ADS', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res)=> {
        console.log(res.body, 'response body ....');
        res.should.have.a.status(200);
        const token = res.body.data;
        chai.request(app)
          .post('/api/v1/car')
          .set('Authorization', `Bearer ${token}`)
          .type('form')
          .field('model', 'rv4')
          .field('manufacturer', 'honda')
          .field('state', 'new')
          .field('price', 500)
          .field('body_type', 'van')
          .field('status', 'sold')
          .field('created_date', 'new Date()')
          .end((err, res)=> {
            res.should.have.a.status(201);
            done();
          });
      });
  });
});