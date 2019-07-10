const token = JSON.parse(localStorage.getItem('data'));
const appendChild = (Parent, child) => Parent.appendChild(child);
//console.log(token);
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const updateCars = () => {
  const CarsUrl = 
};
document.addEventListener('DOMContentLoaded', updateCars);
