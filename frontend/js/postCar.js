const token = JSON.parse(localStorage.getItem('data'));
const postCarAds = (e) => {
  e.preventDefault(e);
  const model = document.getElementById('model').value;
  const manufacturer = document.getElementById('manufacturer').value;
  //console.log(manufacturer);
  const price = document.getElementById('price').value;
  const state = document.getElementById('state').value;
  const status = document.getElementById('status').value;
  const image = document.getElementById('filesToUpload');
  const body_type = document.getElementById('body_type').value;
  const data = new FormData();
  data.append('model', model);
  data.append('manufacturer', manufacturer);
  data.append('price', price);
  data.append('state', state);
  data.append('status', status);
  data.append('image', image.files[0]);
  data.append('body_type', body_type);
  console.log(data);
  console.log(`Authorization=Bearer ${token}`);
  const url = 'http://localhost:3000/api/v1/car';
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  };
  fetch(url, options)
    .then(res => res.json())
    .then((data) => {
      const {status} = data;
      let {message} = data;
      console.log(data);
      console.log(data.error);
      if (status === 400) {
        message = data.data;
      }
      if (status === 409) {
        message = data.message;
      }
      if (status === 404) {
        message = data.data;
      }
      alert(message);
      if (status === 201) {
        alert(message);
        window.location = './user-dashboard.html';
      }
    });
};
// const options = {
//   method: 'POST',
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
//};

document.getElementById('btn-submit').addEventListener('click', postCarAds);