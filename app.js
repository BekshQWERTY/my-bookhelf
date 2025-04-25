let books = [];

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;

  if (title && author && year) {
    const book = {
      id: Date.now(),
      title,
      author,
      isRead: false,
    };

    books.push(book);
    renderBooks();
    clearFrom();
    }
}

function renderBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = books.map(
        <div class="book-card">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <button onclick="toggleRead(${book.id})">
                ${book.isRead ? "Mark as Unread" : "Mark as Read"}
            </button>
            <button onclick="deleteBook(${book.id})">Delete</button>
        </div>
    ).join(''); // Clear the list before rendering
}

function deleteBook(id) {
    books = books.filter((book) => book.id !== id);
    renderBooks();
}

function clearFrom() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
}

// Инициализация при загрузке страницы
window.onload = renderBooks