class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {
        const storedBooks = Storage.getBooks();

        const books = storedBooks;

        books.forEach(book => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const bookList = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><i class="btn btn-small btn-danger delete">X</i></td>
        `;

        bookList.appendChild(row);
    }

    static showAlert(message, type) {
        const container = document.querySelector('.container');
        const formBook = document.getElementById('form-book');
        const div = document.createElement('div');

        div.classList = `alert alert-${type}`;
        div.innerText = message;

        container.insertBefore(div, formBook);

        setTimeout(() => {
            div.remove();
        }, 2000);
    }

    static clearInputs() {
        document.getElementById('book-title').value = '';
        document.getElementById('book-author').value = '';
        document.getElementById('book-isbn').value = '';
    }
}

class Storage {
    static getBooks() {
        let books = localStorage.getItem('books') || [];

        return JSON.parse(books);
    }

    static addNewBook(book) {
        const books = Storage.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Storage.getBooks();

        const filteredBooks = books.filter(book => book.isbn !== isbn);

        localStorage.setItem('books', JSON.stringify(filteredBooks));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.addEventListener('submit', e => {
    e.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const isbn = document.getElementById('book-isbn').value;

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all the fields', 'danger');
    } else {
        const book = new Book(title, author, isbn);

        UI.addBookToList(book);
        UI.showAlert('Book was added', 'success');
        UI.clearInputs();

        Storage.addNewBook(book);
    }
});

document.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();

        UI.showAlert('Book was deleted', 'danger');
        Storage.removeBook(e.target.parentElement.previousElementSibling.innerText);
    }
});