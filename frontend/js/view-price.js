// const appendChild = (Parent, child) => Parent.appendChild(child);
// const token = JSON.parse(localStorage.getItem('data'));
// const options = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };
// const getCarPrice = (e) => {
//   e.preventDefault();
//   const min_price = document.getElementById('min_price').value;
//   const max_price = document.getElementById('max_price').value;
//   console.log(min_price, max_price);
//   const getCarsPriceUrl = `http://localhost:3000/api/v1/car?status=available&min_price=${min_price}&max_price=${max_price}`;
//   fetch(getCarsPriceUrl, options)
//     .then(res => res.json())
//     .then((data) => {
//       console.log(data);
//       console.log(data.car);
//       const containerBtn = document.getElementById('btn-container-price');
//       //const view = document.getElementById('view-all');
//       const view = document.createElement('div');
//       view.setAttribute('class', 'btn-view');
//       view.setAttribute('id', 'view_car');
//       appendChild(containerBtn, view);
//       //console.log(view);
//       const viewCars = document.createElement('a');
//       viewCars.setAttribute('style', 'width: 30%');
//       appendChild(view, viewCars);
//       const img_div = document.createElement('div');
//       appendChild(viewCars, img_div);
//       viewCars.href = `http://localhost:3000/html/view-cars.html?id=${data.car.id}`;
//       img_div.setAttribute('class', 'view-img');
//       const img_tag = document.createElement('img');
//       img_tag.setAttribute('style', 'width: 100%');
//       img_tag.src = data.car.image; 
//       appendChild(img_div, img_tag);
//       const viewWords = document.createElement('div');
//       viewWords.setAttribute('class', 'view-words');
//       appendChild(view, viewWords);
//       const wordsH1 = document.createElement('h1');
//       wordsH1.textContent = `${data.car.manufacturer} ${data.car.model}`;
//       const wordsH6 = document.createElement('h6');
//       wordsH6.textContent = `created_date: ${data.car.created_date}`;
//       const wordsH61 = document.createElement('h6');
//       wordsH61.textContent = `price: ${data.car.price}`;
//       const wordsH62 = document.createElement('h6');
//       wordsH62.textContent = `state: ${data.car.state}`;
//       const wordsH63 = document.createElement('h6');
//       wordsH63.textContent = `Body Type: ${data.car.body_type}`;
//       appendChild(viewWords, wordsH1);
//       appendChild(viewWords, wordsH6);
//       appendChild(viewWords, wordsH61);
//       appendChild(viewWords, wordsH62);
//       appendChild(viewWords, wordsH63);
//     });
// };

// document.addEventListener('DOMContentLoaded', getCarPrice);
