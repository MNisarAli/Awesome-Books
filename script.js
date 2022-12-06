const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
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
  } else {
    books = JSON.parse(books);
  }
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  bookTitle.value = '';
  bookAuthor.value = '';
  displayBooks(title, author, id);
});

const displayBooks = (title, author, id) => {
  const newBook = document.createElement('div');
  newBook.id = id;
  newBook.innerHTML = `
    <p>${title}</p>
    <p>${author}</p>
    <button class="remove-btn ${id}">Remove</button>  
    <hr>
  `;
  const booksList = document.querySelector('#book-list');
  booksList.appendChild(newBook);
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const booksList = document.querySelectorAll('#book-list div');
      booksList.forEach((book) => {
        if (book.id === btn.classList[1]) {
          book.remove();
        }
      });
    });
  });
};

books = JSON.parse(localStorage.getItem('books'));
books.forEach((book) => {
  displayBooks(book.title, book.author, book.id);
});
