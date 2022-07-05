import Book from './modules/book.js';
import { DateTime } from './modules/luxon.js';

const booksCollection = new Book();

booksCollection.displayBooks();

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#add-book');
const input = document.querySelector('input');
const validationMessage = document.querySelector('#form-validation');
const warningText = document.querySelector('#warningtext');

const clearValidationMessage = () => {
  validationMessage.innerHTML = '';
  validationMessage.classList.remove('active');
};

const clearWarningMessage = () => {
  warningText.innerHTML = '';
  warningText.classList.remove('active1');
};

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleInput.value && authorInput.value) {
    booksCollection.addBook(titleInput.value, authorInput.value);
    validationMessage.innerHTML = 'Your book has been added successfully';
    validationMessage.classList.add('active');
    titleInput.value = '';
    authorInput.value = '';
  } else {
    warningText.innerHTML = 'Fields are empty, please add input';
    warningText.classList.add('active1');
  }
});

input.addEventListener('input', () => {
  clearValidationMessage();
});

input.addEventListener('input', () => {
  clearWarningMessage();
});
const navList = document.querySelector('#nav-list');
const navAddNew = document.querySelector('#nav-add-new');
const navContact = document.querySelector('#nav-contact');

const bookListSection = document.querySelector('.books-list');
const addNewSection = document.querySelector('.add-new-book');
const contactSection = document.querySelector('.contact-info');

navList.addEventListener('click', () => {
  navList.classList.add('active');
  navAddNew.classList.remove('active');
  navContact.classList.remove('active');
  bookListSection.classList.add('display-section');
  addNewSection.classList.remove('display-section');
  contactSection.classList.remove('display-section');
});

navAddNew.addEventListener('click', () => {
  navList.classList.remove('active');
  navAddNew.classList.add('active');
  navContact.classList.remove('active');
  bookListSection.classList.remove('display-section');
  addNewSection.classList.add('display-section');
  contactSection.classList.remove('display-section');
});

navContact.addEventListener('click', () => {
  navList.classList.remove('active');
  navAddNew.classList.remove('active');
  navContact.classList.add('active');
  bookListSection.classList.remove('display-section');
  addNewSection.classList.remove('display-section');
  contactSection.classList.add('display-section');
});

const dateTime = document.querySelector('#date-text');
const clock = () => {
  const currentDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  dateTime.innerHTML = currentDateTime;
};
setInterval(clock, 1000);