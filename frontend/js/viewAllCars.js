const token = JSON.parse(localStorage.getItem('data'));
const appendChild = (Parent, child) => Parent.appendChild(child);
//console.log(token);
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};


const getAllCars = () => {
  const getCarsUrl = 'http://localhost:3000/api/v1/car?status=available';
  fetch(getCarsUrl, options)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      //console.log(data);
      data.car.forEach((dataItem) => {
        //console.log(dataItem);
        const containerBtn = document.getElementById('btn-container');
        //const view = document.getElementById('view-all');
        const view = document.createElement('div');
        view.setAttribute('class', 'btn-view');
        view.setAttribute('id', 'view_car');
        appendChild(containerBtn, view);
        //console.log(view);
        const viewCars = document.createElement('a');
        viewCars.setAttribute('style', 'width: 30%');
        appendChild(view, viewCars);
        const img_div = document.createElement('div');
        appendChild(viewCars, img_div);
        viewCars.href = `http://localhost:3000/html/view-cars.html?id=${dataItem.id}`;
        img_div.setAttribute('class', 'view-img');
        const img_tag = document.createElement('img');
        img_tag.setAttribute('style', 'width: 100%');
        img_tag.src = dataItem.image; 
        appendChild(img_div, img_tag);
        const viewWords = document.createElement('div');
        viewWords.setAttribute('class', 'view-words');
        appendChild(view, viewWords);
        const wordsH1 = document.createElement('h1');
        wordsH1.textContent = `${dataItem.manufacturer} ${dataItem.model}`;
        const wordsH6 = document.createElement('h6');
        wordsH6.textContent = `created_date: ${dataItem.created_date}`;
        const wordsH61 = document.createElement('h6');
        wordsH61.textContent = `price: ${dataItem.price}`;
        const wordsH62 = document.createElement('h6');
        wordsH62.textContent = `state: ${dataItem.state}`;
        const wordsH63 = document.createElement('h6');
        wordsH63.textContent = `Body Type: ${dataItem.body_type}`;
        // const updateLink = document.createElement('a');
        // updateLink.setAttribute('id', 'modalBtnUpdate');
        // // console.log(updateLink);
        // updateLink.href = '#simpleModalUpdate';
        // updateLink.innerHTML = '<i class="fas fa-edit"></i>';
        // console.log(updateLink, 'updatelink');
        
        appendChild(viewWords, wordsH1);
        appendChild(viewWords, wordsH6);
        appendChild(viewWords, wordsH61);
        appendChild(viewWords, wordsH62);
        appendChild(viewWords, wordsH63);
      });
    });
  const searchBtn = document.getElementById('modalBtn');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // window.location = '#simpleModal';
    const min_price = document.getElementById('min_price').value;
    const max_price = document.getElementById('max_price').value;
    const priceId = document.getElementById('priceId');
    console.log(min_price, max_price);
    const getCarsPriceUrl = `http://localhost:3000/api/v1/car?status=available&min_price=${min_price}&max_price=${max_price}`;
    fetch(getCarsPriceUrl, options)
      .then(res => res.json())
      .then((priceData) => {
        console.log(priceData);
        console.log(priceData.car);
        priceData.car.forEach((priceDataItem) => {
          console.log(priceDataItem);
          const priceView = document.createElement('div');
          priceView.setAttribute('class', 'btn-view');
          appendChild(priceId, priceView);
          const priceLink = document.createElement('a');
          priceLink.setAttribute('style', 'width: 30%');
          priceLink.href = `http://localhost:3000/html/view-cars.html?id=${priceDataItem.id}`;
          appendChild(priceView, priceLink);
          const priceLinkDiv = document.createElement('div');
          priceLinkDiv.setAttribute('class', 'view-img');
          appendChild(priceLink, priceLinkDiv);
          const priceImg = document.createElement('img');
          priceImg.setAttribute('style', 'width: 100%');
          priceImg.src = priceDataItem.image; 
          appendChild(priceLinkDiv, priceImg);
          const priceWords = document.createElement('div');
          priceWords.setAttribute('class', 'view-words');
          appendChild(priceView, priceWords);
          const priceH1 = document.createElement('h1');
          priceH1.textContent = `${priceDataItem.manufacturer} ${priceDataItem.model}`;
          const priceH2 = document.createElement('h6');
          priceH2.textContent = `Created_date: ${priceDataItem.created_date}`;
          const priceH3 = document.createElement('h6');
          priceH3.textContent = `price: ${priceDataItem.price}`;
          const priceH4 = document.createElement('h6');
          priceH4.textContent = `State: ${priceDataItem.state}`;
          const priceH5 = document.createElement('h6');
          priceH5.textContent = `Body Type: ${priceDataItem.body_type}`;
          appendChild(priceWords, priceH1);
          appendChild(priceWords, priceH2);
          appendChild(priceWords, priceH3);
          appendChild(priceWords, priceH4);
          appendChild(priceWords, priceH5);
        });
      });
  });
};

document.addEventListener('DOMContentLoaded', getAllCars);
// searchBtn.addEventListener('click', getCarsPrice);