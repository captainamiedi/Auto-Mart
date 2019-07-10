const token = JSON.parse(localStorage.getItem('data'));
const appendChild = (parent, child) => parent.appendChild(child);
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const adminSection = () => {
  const adminUrl = 'http://localhost:3000/api/v1/car';
  fetch(adminUrl, options)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.car);
      data.car.forEach((dataItem) => {
        const adminContainer = document.getElementById('container');
        const adminView = document.createElement('div');
        adminView.setAttribute('class', 'btn-view');
        adminView.setAttribute('id', 'adminView');
        appendChild(adminContainer, adminView);
        const adminImg = document.createElement('div');
        adminImg.setAttribute('class', 'view-img');
        adminImg.setAttribute('style', 'width: 40%');
        const adminImgTag = document.createElement('img');
        adminImgTag.setAttribute('style', 'width: 100%');
        adminImgTag.src = dataItem.image;
        appendChild(adminView, adminImg);
        appendChild(adminImg, adminImgTag);
        const adminViewWords = document.createElement('div');
        adminViewWords.setAttribute('class', 'view-words');
        appendChild(adminView, adminViewWords);
        const adminWordsH1 = document.createElement('h1');
        adminWordsH1.textContent = `${dataItem.manufacturer} ${dataItem.model}`;
        const adminWordsH6 = document.createElement('h6');
        adminWordsH6.textContent = `created_date: ${dataItem.created_date}`;
        const adminWordsH61 = document.createElement('h6');
        adminWordsH61.textContent = `price: ${dataItem.price}`;
        const adminWordsH62 = document.createElement('h6');
        adminWordsH62.textContent = `state: ${dataItem.state}`;
        const adminWordsH63 = document.createElement('h6');
        adminWordsH63.textContent = `Body Type: ${dataItem.body_type}`;
        const adminWordsH64 = document.createElement('h6');
        adminWordsH64.textContent = `Status: ${dataItem.status}`;
        // const deleteDiv = document.createElement('div');
        const deleteBtn = document.createElement('button');
        // appendChild(adminViewWords, deleteDiv);
        deleteBtn.setAttribute('class', 'btn-default');
        deleteBtn.setAttribute('id', 'admin-btn');
        deleteBtn.setAttribute('style', 'float: right, hover: black');
        deleteBtn.textContent = 'DELETE';
        appendChild(adminViewWords, adminWordsH1);
        appendChild(adminViewWords, adminWordsH6);
        appendChild(adminViewWords, adminWordsH61);
        appendChild(adminViewWords, adminWordsH62);
        appendChild(adminViewWords, adminWordsH63);
        appendChild(adminViewWords, adminWordsH64);
        appendChild(adminViewWords, deleteBtn);

        const adminDeleteBtn = document.getElementById('admin-btn');
        // console.log(adminDeleteBtn);

        adminDeleteBtn.addEventListener('click', ()=> {
          console.log('im in here');
          const adminDeleteUrl = `http://localhost:3000/api/v1/car/${dataItem.id}`;
          console.log(dataItem.id);
          const optionDelete = {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          fetch(adminDeleteUrl, optionDelete)
            .then(res => res.json())
            .then((data) => {
              alert(data.message);
              console.log(data);
              console.log(adminContainer);
              const adminDelete = document.getElementById('adminView');
              // console.log(adminDelete);
              // const adminRemove = adminContainer.removeChild(adminDelete);
              // console.log(adminRemove);
              const deleteBtnParent = adminDelete.parentElement.parentElement;
              deleteBtnParent.parentNode.removeChild(deleteBtnParent);
            })
            .catch(error => console.log(error));
        });
      });
    })
    .catch(error => console.log(error));
};
document.addEventListener('DOMContentLoaded', adminSection);