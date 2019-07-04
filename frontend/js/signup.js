const createUser = (event) => {
  event.preventDefault();
  const first_name = document.getElementById('first_name').value;
  //console.log(first_name);
  const last_name = document.getElementById('last_name').value;
  const address = document.getElementById('address').value;
  //console.log(last_name);
  const email = document.getElementById('email').value;
  //console.log(email);
  const password = document.getElementById('password').value;
  //console.log(password);
  const re_type_password = document.getElementById('re-type-password').value;
  //console.log(re_type_password);
  //const admin = document.querySelector('#admin').checked;
  //console.log(admin);
  
  const url = 'http://localhost:3000/api/v1/signup';

  const data = {
    first_name, last_name, address, email, password,
  };
  //console.log(data);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json, text/plain, */*',
    },
    body: JSON.stringify(data),
  };
  
  
  fetch(url, options)
    .then(res => res.json())
    .then((data) => {
      //console.log(data);
      let { message } = data;
      const { status } = data;
      console.log(message);
      if (password !== re_type_password) {
        message = 'password does not match';
      }
      if (status === 400) {
        message = data.data;
      }
      if (status === 409) {
        message = data.message;
      }
      alert(message);
      if (status === 201) {
        alert(message);
        window.location.replace('./index.html');
      }
    })
    .catch(error => console.log(error));
};

const loginUser = (e) => {
  e.preventDefault();
  const email = document.getElementById('login_email').value;
  const password = document.getElementById('login_password').value;
  const admin = document.querySelector('#admin').checked;

  const url = 'http://localhost:3000/api/v1/login';

  const data = { email, password, admin};
  //console.log(data);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json, text/plain, */*',
    },
    body: JSON.stringify(data),
  };
  fetch(url, options)
    .then(res => res.json())
    .then((data) => {
      //console.log(data);
      let { message, status } = data;
      localStorage.setItem('data', JSON.stringify(data.token));
      //const { status } = data;
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
      if (status === 200) {
        alert(message);
        window.location = './index.html';
      }
      if (data.admin === true) {
        window.location = './admin.html';
      }
    })
    .catch(error => console.log(error));
};
document.getElementById('btn').addEventListener('click', createUser);
document.getElementById('btn-login').addEventListener('click', loginUser);