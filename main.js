const addNewBookBtn = document.querySelector('.newBooks')
const newBookBtn = document.querySelector('.btn');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const pagesInput = document.querySelector('.pagesInput');


const toggleModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

const checkForNumbers = (e) => {

    console.log(typeof parseInt(e.key));
    if(isNaN(e.key)){
        return false;
    }
}

addNewBookBtn.addEventListener('click', toggleModal);
newBookBtn.addEventListener('click', toggleModal);

pagesInput.addEventListener('keyup', checkForNumbers)

