const addNewBookBtn = document.querySelector('.newBooks')
const bookList = document.querySelector('.BookList')

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const newBookBtn = document.querySelector('.btn');

const bookTitleInput = document.querySelector('.bookNameInput')
const authorInput = document.querySelector('.authorInput')
const numberOfPagesInput = document.querySelector('.pagesInput');



const trashCanSvg = '<svg xmlns="http://www.w3.org/2000/svg" class="bookCardsSvg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z"/></svg>'

const toggleModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

class Book {
    constructor(
        title,
        author,
        numberOfPages,
        isRead = false
    ) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;

        this.addBook();
    }

    addBook = () => {
        const html = 
        `
        <div class="bookCard">
            <h2>Title: ${this.title}</h2>
            <p>Author: ${this.author}</p>
            <p>Pages: ${this.numberOfPages}</p>
            <input type="checkbox">
            ${trashCanSvg}
        </div>
        `
        bookList.innerHTML += html;
    }
    deleteBook = () => {

    }
}


newBookBtn.addEventListener('click', () => { 
    new Book(bookTitleInput.value, authorInput.value, numberOfPagesInput.value);
    bookTitleInput.value = '';
    authorInput.value = '';
    numberOfPagesInput.value = '';
    toggleModal();
});


addNewBookBtn.addEventListener('click', toggleModal);

bookList.addEventListener('click', (e) => {
    if(e.target.classList.contains('bookCardsSvg')){
        e.target.closest('.bookCard').remove();
    }
})