const token = JSON.parse(localStorage.getItem('data'));
//const dataId = JSON.parse(localStorage.getItem('dataCar'));
const appendChild = (Parent, child) => Parent.appendChild(child);
//console.log(token);
//console.log(dataId.car);
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const viewColumn = document.getElementById('column');
const carSec = document.getElementById('car-sec');
const carTable = document.getElementById('car-table');
const form = document.getElementById('formId');
const viewCars = () => {
  const carId = window.location.href.split('?id=')[1];
  console.log(carId);
  const viewCarsUrl = `http://localhost:3000/api/v1/car/${carId}`;
  fetch(viewCarsUrl, options)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.car);
      viewColumn.innerHTML = `<div class="banner-head">
      <h2>${`${data.car.model} ${data.car.manufacturer}`}</h2>
      <i class="fas fa-map-marker-alt"></i>
      <p>Lagos, Nigeria</p>
      <h3 class="price">&#8358 ${data.car.price}</h3>
      </div>
      <div class="image">
      <img src="${data.car.image}" alt="" id="mainImage">
      </div>`;
      const carHead = document.createElement('thead');
      carHead.innerHTML = `
      <tr>
        <th>Specification and Performance</th>
      </tr>
      <tr>
      <td>Body Type:</td>
      <td>${data.car.body_type}</td>
      </tr>
      <tr>
          <td>Staus:</td>
          <td>${data.car.status}</td>
      </tr>
      <tr>
          <td>State:</td>
          <td>${data.car.state}</td>
      </tr>
      <tr>
          <td>created Date:</td>
          <td>${data.car.created_date}</td>
      </tr>
      <tr>
          <td>WARRANTY:</td>
          <td>Options Available</td>
      </tr>`;
      const formH2 = document.createElement('h2');
      formH2.innerHTML = 'OFFER';
      const formH4 = document.createElement('h4');
      formH4.innerHTML = 'Please, Enter Your price.';
      const fromH41 = document.createElement('h4');
      const formInput = document.createElement('input');
      formInput.setAttribute('type', 'number');
      formInput.setAttribute('placeholder', 'Enter price');
      formInput.setAttribute('id', 'price');
      appendChild(form, formH2);
      appendChild(form, formH4);
      appendChild(form, fromH41);
      appendChild(form, formInput);
      // const formInput2 = document.createElement('input');
      // formInput2.setAttribute('type', 'text');
      // formInput2.setAttribute('placeholder', 'Enter car_id');
      // formInput2.setAttribute('id', 'car_id');
      // appendChild(form, formInput2);
      const formSubmit = document.createElement('div');
      formSubmit.setAttribute('class', 'submit');
      const formButton = document.createElement('button');
      formButton.setAttribute('class', 'modal-submit');
      formButton.setAttribute('id', 'offerBtn');
      formButton.innerHTML = 'Submit';
      appendChild(form, formSubmit);
      appendChild(formSubmit, formButton);
      // form.innerHTML = `<h2>OFFER</h2>
      // <h4>Please, Enter Your Offer.</h4>
      // <h4 id = "carId">car_id: ${data.car.id}</h4>
      // <input type="text" placeholder="Enter Offer" id="offer">
      // <div class="submit">
      //     <button class="modal-submit" id="offerBtn">Submit</button>
      // </div>`;
      appendChild(carTable, carHead);
      appendChild(viewColumn, carSec);

      
      const offerBtn = document.getElementById('offerBtn');
      offerBtn.addEventListener('click', (event) => {
        //console.log('im here');
        event.preventDefault();
        const price1 = document.getElementById('price').value;
        //const car_id = document.getElementById('car_id').value;
        const price = parseInt(price1, 10);
        console.log(price);
        car_id = carId;
        // const data = new FormData();
        // data.append('price', price);
        // data.append('car_id', carId);
        //console.log(car_id);
        //console.log(offer);
        const data = {price, car_id};
        console.log(data);
        const optionsOffer = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json, text/plain, */*',
          },
          body: JSON.stringify(data),
        };
        const offerUrl = 'http://localhost:3000/api/v1/order';
        fetch(offerUrl, optionsOffer)
          .then(res => res.json())
          .then((data)=> {
            console.log(data);
            const { status, message } = data;
            if (status === 400) {
              message = data.data;
            }
            if (status === 409) {
              message = data.message;
            }
            alert(message);
            if (status === 201) {
              alert(message);
              window.location.replace('./user-dashboard.html');
            }
          });
      })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  // const carFormId = document.getElementById('carId');
  // console.log(carFormId);
  // let formCarId = document.createElement('h4');
  // formCarId = data.car.id;
  //appendChild(form, formCarId);
  // const offerBtn = document.getElementById('offerBtn');
  // offerBtn.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   const offer = document.getElementById('offer').value;
  //   console.log(offer);
  //   const data = offer;
  //   const optionsOffer = {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(data),
  //   };
  //   const offerUrl = 'http://localhost:3000/api/v1/order';
  //   fetch(offerUrl, optionsOffer)
  //     .then(res => res.json())
  //     .then((data)=> {
  //       console.log(data);
  //     });
  // });
};

document.addEventListener('DOMContentLoaded', viewCars);
// document.addEventListener('', orderCar);
