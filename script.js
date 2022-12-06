const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const addBtn = document.querySelector('#add-book');

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const id = Date.now();
  const book = { title, author, id };
  let books = localStorage.getItem('books');
  if (books === null) {
    books = [];
  }
  else {
    books = JSON.parse(books);
  }
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  bookTitle.value = '';
  bookAuthor.value = '';
});
