import React, { Component } from 'react';
import Book from './Book';

class BookGrid extends Component {
    render() {
        const { books, moveBook } = this.props;

        return (
            <ol className="books-grid">
                {books.map(book => (
                    <li key={book.id}>
                        <Book
                            title={book.title}
                            author={book.authors[0]}
                            imageURL={book.imageLinks.smallThumbnail}
                            moveBook={newShelf => moveBook(book, newShelf)}
                        />
                    </li>
                ))}
            </ol>
        );
    }
}

export default BookGrid;