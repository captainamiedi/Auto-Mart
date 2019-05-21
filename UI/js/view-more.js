const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
const modalBtn1 = document.getElementById('modalBtn1');
const closeBtn = document.getElementsByClassName('closeBtn')[0];
modalBtn.addEventListener('click', openModal);
modalBtn1.addEventListener('click', openModal);
window.addEventListener('click', outsideClick);

closeBtn.addEventListener('click', closeModal);

function openModal(){
    console.log('1133')
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}
 
function changeImage(event){
    const targetElement = event.target
    if(targetElement.tagName == 'IMG'){
        document.getElementById('mainImage').src =targetElement.getAttribute('src');
    }
}