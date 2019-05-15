const modal = document.getElementById('simpleModal');
        const modalBtn = document.getElementById('modalBtn');
        const closeBtn = document.getElementsByClassName('closeBtn')[0];
        modalBtn.addEventListener('click', openModal);

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