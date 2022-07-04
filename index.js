import Book from './modules/book.js';
import { DateTime } from './modules/luxon.js';

const booksCollection = new Book();

booksCollection.displayBooks();

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#add-book');
const input = document.querySelector('input');
const validationMessage = document.querySelector('#form-validation');

const clearValidationMessage = () => {
    validationMessage.innerHTML = '';
    validationMessage.classList.remove('active');
};

addBook.addEventListener('click', (e) => {
    e.preventDefault();
    if (titleInput.value && authorInput.value) {
        booksCollection.addBook(titleInput.value, authorInput.value);
        validationMessage.innerHTML = 'Your book has been added successfully';
        validationMessage.classList.add('active');
        titleInput.value = '';
        authorInput.value = '';
    }
});

input.addEventListener('input', () => {
    clearValidationMessage();
});
