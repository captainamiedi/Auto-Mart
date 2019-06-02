import moment from 'moment';
const cars = [
  {
    id: 1,
    owner: 1, // user id
    created_on: moment.now(),
    state: 'used', // new,used
    status: 'availabe', // sold,available - default is available
    price: '1,000',
    manufacturer: 'Honda',
    model: '320',
    body_type: 'car',    
  },
  {
    id: 2,
    owner: 2, // user id
    created_on: moment.now(),
    state: 'new', // new,used
    status: 'availabe', // sold,available - default is available
    price: '100,000',
    manufacturer: 'Honda',
    model: '200',
    body_type: 'van',    
  },
];

export default cars;