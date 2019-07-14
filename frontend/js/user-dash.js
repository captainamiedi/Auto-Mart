const token = JSON.parse(localStorage.getItem('data'));
const appendChild = (Parent, child) => Parent.appendChild(child);
//console.log(token);
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const updateCars = () => {
  const carsUrl = 'http://localhost:3000/api/v1/order/user';
  fetch(carsUrl, options)
    .then(res => res.json())
    .then((data) => {
      console.log(data.car, 'carssss');
      data.car.forEach((dataItem) => {
        // console.log(dataItem);
        const mainActivityTable = document.getElementById('main-activity-table');
        const trTable = document.createElement('tr');
        appendChild(mainActivityTable, trTable);
        const tdTable = document.createElement('td');
        const tdTableImg = document.createElement('img');
        tdTableImg.src = dataItem.image;
        appendChild(trTable, tdTable);
        appendChild(tdTable, tdTableImg);
        const tdTableName = document.createElement('td');
        tdTableName.textContent = `${dataItem.model} ${dataItem.manufacturer}`;
        appendChild(trTable, tdTableName);
        const tdTablePrice = document.createElement('td');
        tdTablePrice.textContent = dataItem.price;
        appendChild(trTable, tdTablePrice);
        // const tdTableStatus = document.createElement('td');
        const tableStatus = document.createElement('input');
        tableStatus.setAttribute('type', 'checkbox');
        tableStatus.setAttribute('id', 'tableCheckbox');
        const tableStatusPara = document.createElement('p');
        tableStatusPara.textContent = dataItem.status;
        appendChild(trTable, tableStatusPara);
        if (dataItem.status === 'sold') {
          tableStatus.disabled = true;
        }
        tableStatus.addEventListener('click', (e) => {
          if (e.target.checked) {
            const optionStatus = {
              method: 'PATCH',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            const updateStatusUrl = `http://localhost:3000/api/v1/car/${dataItem.id}/status`;
            fetch(updateStatusUrl, optionStatus)
              .then(res => res.json())
              .then((data) => {
                console.log(data);
                tableStatusPara.textContent = `${data.car.status}`;
                tableStatus.disabled = true;
              });
          } 
        });
        appendChild(trTable, tableStatus);
        // const modalStatus = document.getElementById('update-status');
        const modalTd = document.createElement('td');
        // modalTd.setAttribute('id', 'modalBtn');
        modalTd.addEventListener('click', () => {
          document.getElementById('simpleModal').style.display = 'block';
          const updatePrice = document.getElementById('update-price');
          document.getElementById('modalSubmitBtn').addEventListener('click', (e) => {
            e.preventDefault();
            const price = parseInt(updatePrice.value, 10);
            // console.log(price);
            const data = {price};
            const optionPrice = {
              method: 'PATCH',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json, text/plain, */*',
              },
              body: JSON.stringify(data),
            };
            const updatePriceUrl = `http://localhost:3000/api/v1/car/${dataItem.id}/price`;
            fetch(updatePriceUrl, optionPrice)
              .then(res => res.json())
              .then((data)=> {
                // console.log(data.car.price);
                tdTablePrice.textContent = data.car.price;
                tdTablePrice.style.backgroundColor = '#4CAF50';
              });
          });
        });
        const modalLink = document.createElement('a');
        modalLink.href = `http://localhost:3000/html/user-dashboard.html#simpleModal?id=${dataItem.id}`;
        const modalIcon = document.createElement('i');
        modalIcon.setAttribute('class', 'fas fa-edit');
        appendChild(trTable, modalTd);
        appendChild(modalTd, modalLink);
        appendChild(modalLink, modalIcon);
      });
    });
};

const updateOrder = () => {
  const orderUrl = 'http://localhost:3000/api/v1/order/user';
  fetch(orderUrl, options)
    .then(res => res.json())
    .then((data) => {
      console.log(data.order);
      // console.log(data.car);
      data.order.forEach((dataItem) => {
        const mainActivityTable = document.getElementById('main-activity-table');
        const trTable = document.createElement('tr');
        appendChild(mainActivityTable, trTable);
        const tdTable = document.createElement('td');
        const tdTableImg = document.createElement('img');
        tdTableImg.src = dataItem.image;
        appendChild(trTable, tdTable);
        appendChild(tdTable, tdTableImg);
        const tdTableName = document.createElement('td');
        tdTableName.textContent = `${dataItem.model} ${dataItem.manufacturer}`;
        appendChild(trTable, tdTableName);
        const tdTablePrice = document.createElement('td');
        tdTablePrice.textContent = dataItem.price;
        appendChild(trTable, tdTablePrice);
        const tdTableStatus = document.createElement('td');
        tdTableStatus.textContent = dataItem.status;
        appendChild(trTable, tdTableStatus);
        const modalTd = document.createElement('td');
        // if (dataItem.status !== 'pending') {
        //   document.getElementById('simpleModal').style.display = 'none';
        // }
        modalTd.setAttribute('id', 'modalBtn');
        modalTd.addEventListener('click', () => {
          console.log('good.....');
          document.getElementById('simpleModal').style.display = 'block';
          document.getElementById('modalSubmitBtn').addEventListener('click', (e) => {
            e.preventDefault();
            const updatePrice = document.getElementById('update-price');
            const price = parseInt(updatePrice.value, 10);
            console.log(price);
            const data = {price};
            const optionPrice = {
              method: 'PATCH',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json, text/plain, */*',
              },
              body: JSON.stringify(data),
            };
            const updatePriceUrl = `http://localhost:3000/api/v1/order/${dataItem.id}/price`;
            fetch(updatePriceUrl, optionPrice)
              .then(res => res.json())
              .then((data) => {
                console.log(data);
              });
          });
        });
        const modalLink = document.createElement('a');
        modalLink.href = `http://localhost:3000/html/user-dashboard.html#simpleModal?id=${dataItem.id}`;
        const modalIcon = document.createElement('i');
        modalIcon.setAttribute('class', 'fas fa-edit');
        appendChild(trTable, modalTd);
        appendChild(modalTd, modalLink);
        appendChild(modalLink, modalIcon);
      });
    });
};
document.addEventListener('DOMContentLoaded', updateCars(), updateOrder());