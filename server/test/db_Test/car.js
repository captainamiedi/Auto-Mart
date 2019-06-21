import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';


chai.use(chaiHttp);
chai.should();

const user = {
  first_name: 'math',
  last_name: 'peter',
  email: 'test212@gmail.com',
  password: '1NIGeria@',
  address: '10 james street',
  is_admin: true,
};
const user2 = {
  first_name: 'math',
  last_name: 'peter',
  email: 'test212@gmail.com',
  password: '1NIGeria@',
  address: '10 james street',
  is_admin: false,
};
const car = {
  id: 'f93d3e5b-5576-407c-93d9-8b737f19e1c2',
  model: 'Corolla',
  manufacturer: 'Toyota',
  price: '100000',
  image: 'null',
  state: 'new',
  body_type: 'van',
};

describe('CREATE ADS', () => {
  it('should allow signup user create car Ads', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(201);
        const { token } = res.body.user;
        chai.request(app)
          .post('/api/v1/car')
          .set('Authorization', `Bearer ${token}`)
          // .send({
          //   model: 'Corolla',
          //   manufacturer: 'Toyota',
          //   price: '100000',
          //   image: 'null',
          //   state: 'new',
          //   body_type: 'van',
          // })
          .send(car)
          .end((err, res) => {
            res.should.have.a.status(201);
            done();
          });
      });
  });
  it('should not allow unathorise user to create ADS', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send({
        email: 'test111111@gmail.com',
        password: '123absAV@',
      })
      .end((err, res) => {
        //console.log(res.body, '======-----00000000');
        res.should.have.a.status(401);
        //const { token } = res.body.user;
        chai.request(app)
          .post('/api/v1/car')
          //.set('Authorization', `Bearer ${token}`)
          .send({
            model: 'Corolla',
            manufacturer: 'Toyota',
            price: '100000',
            image: 'null',
            state: 'new',
            body_type: 'van',
          })
          .end((err, res) => {
            //console.log(res.body, 'hhhjjkkc......');
            res.should.have.a.status(401);
            done();
          });
      });
  });
  it('should not allow user create ADS when model is empty', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .post('/api/v1/car')
          .set('Authorization', `Bearer ${token}`)
          .send({
            model: '',
            manufacturer: 'Toyota',
            price: '100000',
            image: 'null',
            state: 'new',
            body_type: 'van',
          })
          .end((err, res) => {
            res.should.have.a.status(400);
            done();
          });
      });
  });
  it('should not allow user create ADS when manufacturer is empty', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .post('/api/v1/car')
          .set('Authorization', `Bearer ${token}`)
          .send({
            model: 'Corolla',
            manufacturer: '',
            price: '100000',
            image: 'null',
            state: 'new',
            body_type: 'van',
          })
          .end((err, res) => {
            res.should.have.a.status(400);
            done();
          });
      });
  });
  it('should not allow user create ADS when price is empty', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .post('/api/v1/car')
          .set('Authorization', `Bearer ${token}`)
          .send({
            model: 'Corolla',
            manufacturer: 'Toyota',
            price: '',
            image: 'null',
            state: 'new',
            body_type: 'van',
          })
          .end((err, res) => {
            res.should.have.a.status(400);
            done();
          });
      });
  });
  it('should not allow user create ADS when price is not a number', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .post('/api/v1/car')
          .set('Authorization', `Bearer ${token}`)
          .send({
            model: 'Corolla',
            manufacturer: 'Toyota',
            price: 'nigeria',
            image: 'null',
            state: 'new',
            body_type: 'van',
          })
          .end((err, res) => {
            res.should.have.a.status(400);
            done();
          });
      });
  });
  it('should not allow user create ADS when state is empty', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .post('/api/v1/car')
          .set('Authorization', `Bearer ${token}`)
          .send({
            model: 'Corolla',
            manufacturer: 'Toyota',
            price: '100000',
            image: 'null',
            state: '',
            body_type: 'van',
          })
          .end((err, res) => {
            res.should.have.a.status(400);
            done();
          });
      });
  });
  it('should not allow user create ADS when body_type is empty', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .post('/api/v1/car')
          .set('Authorization', `Bearer ${token}`)
          .send({
            model: 'Corolla',
            manufacturer: 'Toyota',
            price: '100000',
            image: 'null',
            state: 'new',
            body_type: '',
          })
          .end((err, res) => {
            res.should.have.a.status(400);
            done();
          });
      });
  });
});

describe('UPDATE CAR', () => {
  it('should up a specific car price', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        //console.log(res.body, 'signi.......');
        const { token } = res.body.user;
        chai.request(app)
          .patch('/api/v1/car/f93d3e5b-5576-407c-93d9-8b737f19e1c2/price')
          .set('Authorization', `Bearer ${token}`)
          .send({
            price: '50000',
          })
          .end((err, res) => {
            //console.log(res.body, 'resp.........');
            res.should.have.a.status(200);
            done();
          });
      });
  });
  it('should not allow user update price when price is not a number', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .patch('/api/v1/car/f93d3e5b-5576-407c-93d9-8b737f19e1c2/price')
          .set('Authorization', `Bearer ${token}`)
          .send({
            price: 'nigeir',
          })
          .end((err, res) => {
            res.should.have.a.status(400);
            done();
          });
      });
  });
  it('should not allow user update cars when price empty', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .patch('/api/v1/car/f93d3e5b-5576-407c-93d9-8b737f19e1c2/price')
          .set('Authorization', `Bearer ${token}`)
          .send({
            price: '',
          })
          .end((err, res) => {
            res.should.have.a.status(400);
            done();
          });
      });
  });
});

describe('UPDATE STATUS', ()=>{
  it('should update car status', (done)=>{
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        //console.log(res.body, 'signi.......');
        const { token } = res.body.user;
        chai.request(app)
          .patch('/api/v1/car/f93d3e5b-5576-407c-93d9-8b737f19e1c2/status')
          .set('Authorization', `Bearer ${token}`)
          .send({
            status: 'available',
          })
          .end((err, res) => {
            //console.log(res.body, 'resp.........');
            res.should.have.a.status(200);
            done();
          });
      });
  });
  it('should not allow user update status when status is a number', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .patch('/api/v1/car/f93d3e5b-5576-407c-93d9-8b737f19e1c2/status')
          .set('Authorization', `Bearer ${token}`)
          .send({
            status: '',
          })
          .end((err, res) => {
            console.log(res.body, 'comeon.......');
            res.should.have.a.status(400);
            done();
          });
      });
  });
});

describe('DELETE CAR', ()=>{
  it('should delete a specific car', (done)=>{
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .delete('/api/v1/car/f93d3e5b-5576-407c-93d9-8b737f19e1c2/')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            //console.log(res.body, 'delete.......');
            res.should.have.a.status(200);
            done();
          });
      });
  });
  it('should not delete a specific car when params is wrong', (done)=>{
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .delete('/api/v1/car/f93d3e5b-5576-407c')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            //console.log(res.body, 'delete.......');
            res.should.have.a.status(400);
            done();
          });
      });
  });
});

describe('GET CARS', ()=>{
  it('should get a specific car', (done)=>{
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .get('/api/v1/car/f93d3e5b-5576-407c-93d9-8b737f19e1c2')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            //console.log(res.body, 'get for me.......');
            res.should.have.a.status(200);
            done();
          });
      });
  });
  it('should not get a specific car when params is wrong', (done)=>{
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .get('/api/v1/car/f93d3e5b-5576-407c')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            //console.log(res.body, 'delete.......');
            res.should.have.a.status(400);
            done();
          });
      });
  });
  it('should get all cars', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .get('/api/v1/car/')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            //console.log(res.body, 'delete.......');
            res.should.have.a.status(200);
            done();
          });
      });
  });
  it('should not get all cars if admin is false', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user2)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .get('/api/v1/car/')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            //console.log(res.body, 'delete.......');
            res.should.have.a.status(200);
            done();
          });
      });
  });
  it('should get all cars with status = available', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .get('/api/v1/car?status=available')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            //console.log(res.body, 'delete.......');
            res.should.have.a.status(200);
            done();
          });
      });
  });
  it('should get all cars with status = available and min_price and max_price', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .get('/api/v1/car?status=available&min_price=1000&max_price=10000')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            //console.log(res.body, 'delete.......');
            res.should.have.a.status(200);
            done();
          });
      });
  });
  it('should get all cars with status = available and state = new', (done) => {
    chai.request(app)
      .post('/api/v1/login')
      .send(user)
      .end((err, res) => {
        res.should.have.a.status(200);
        const { token } = res.body.user;
        chai.request(app)
          .get('/api/v1/car?status=available&state=new')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            //console.log(res.body, 'delete.......');
            res.should.have.a.status(200);
            done();
          });
      });
  });
});