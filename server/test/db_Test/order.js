// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../../index';


// chai.use(chaiHttp);
// chai.should();

// const order = {
//   car_id: 'f93d3e5b-5576-407c-93d9-8b737f19e1c2',
//   price: '20000',
//   status: 'pending',
// };
// const flag = {

//   description: 'false',
//   reason: 'abuse',
//   car_id: 'f93d3e5b-5576-407c-93d9-8b737f19e1c2',
// };

// const user = {
//   first_name: 'math',
//   last_name: 'peter',
//   email: 'test230@gmail.com',
//   password: '1NIGeria@',
//   address: '10 james street',
//   is_admin: true,
// };

// describe('CREATE ORDER', () =>{
//   it('should allow signup user create order', (done) => {
//     chai.request(app)
//       .post('/api/v1/signup')
//       .send(user)
//       .end((err, res) => {
//         console.log(res.body, 'order test.........');
//         res.should.have.a.status(201);
//         const { token } = res.body.user;
//         chai.request(app)
//           .post('/api/v1/order')
//           .set('Authorization', `Bearer ${token}`)
//           .send(order)
//           .end((err, res) => {
//             console.log(res.body, '==========+++++++++=');
//             res.should.have.a.status(201);
//             done();
//           });
//       });
//   });
// });

// describe('FLAG POST', () =>{
//   it('should post a report for a car', (done)=>{
//     chai.request(app)
//       .post('/api/v1/login')
//       .send(user)
//       .end((err, res)=>{
//         res.should.have.a.status(200);
//         const {token} = res.body.user;
//         chai.request(app)
//           .post('/api/v1/flag')
//           .set('Authorization', `Bearer ${token}`)
//           .send(flag)
//           .end((err, res)=>{
//             console.log(res.body, 'flaggiiiiiiiiiiii');
//             res.should.have.a.status(201);
//             done();
//           });
//       });    
//   });
// });