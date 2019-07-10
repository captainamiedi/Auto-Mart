const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
console.log(modalBtn);
const closeBtn = document.getElementsByClassName('closeBtn')[0];
function openModal() {
  console.log('1133');
  modal.style.display = 'block';
}
function closeModal() {
  modal.style.display = 'none';
}
function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}
 
function changeImage(event) {
  const targetElement = event.target;
  if (targetElement.tagName === 'IMG') {
    document.getElementById('mainImage').src = targetElement.getAttribute('src');
  }
}

modalBtn.addEventListener('click', openModal);

window.addEventListener('click', outsideClick);

closeBtn.addEventListener('click', closeModal);


// const modalUpdate = document.getElementById('simpleModalUpdate');
// const modalBtnUpdate = document.getElementById('modalBtnUpdate');
// console.log(modalBtnUpdate);
// const closeBtnUpdate = document.getElementsByClassName('closeBtnUpdate')[0];
// function openModalUpdate() {
//   console.log('1133');
//   modalUpdate.style.display = 'block';
// }
// function closeModalUpdate() {
//   modalUpdate.style.display = 'none';
// }
// function outsideClickUpdate(e) {
//   if (e.target === modal) {
//     modalUpdate.style.display = 'none';
//   }
// }
 
// function changeImage(event) {
//   const targetElement = event.target;
//   if (targetElement.tagName === 'IMG') {
//     document.getElementById('mainImage').src = targetElement.getAttribute('src');
//   }
// }

// modalBtnUpdate.addEventListener('click', openModalUpdate);

// window.addEventListener('click', outsideClickUpdate);

// closeBtnUpdate.addEventListener('click', closeModalUpdate);