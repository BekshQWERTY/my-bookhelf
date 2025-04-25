function addBook() {
    // Получаем значения из полей ввода
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const year = document.getElementById('bookYear').value;

    // Проверяем, что все поля заполнены
    if (!title || !author || !year) {
        alert('Please fill in all fields!');
        return;
    }

    // Создаем новую карточку книги
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    
    bookCard.innerHTML = `
        <h3>${title}</h3>
        <p>Author: ${author}</p>
        <p>Year: ${year}</p>
        <button class="delete-btn" onclick="deleteBook(this)">Delete</button>
    `;

    // Добавляем карточку в сетку
    document.getElementById('bookGrid').appendChild(bookCard);

    // Очищаем поля ввода
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookYear').value = '';
}

function deleteBook(button) {
    // Удаляем родительский элемент кнопки (карточку книги)
    button.parentElement.remove();
}