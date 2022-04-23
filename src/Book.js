import React, { Component } from 'react';
import ShelfSelection from './ShelfSelection';

class Book extends Component {
    render() {
        const { book, moveBook } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
                    }}></div>
                    <div className="book-shelf-changer">
                    <ShelfSelection changeShelf={moveBook} value={book.shelf}/>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        );
    }
}

export default Book;
