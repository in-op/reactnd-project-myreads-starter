import React, { Component } from 'react';
import BookGrid from './BookGrid';

class Shelf extends Component {
    render() {
        const { title, books, moveBook } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookGrid
                        books={books}
                        moveBook={moveBook}
                    />
                </div>
            </div>
        );
    }
}

export default Shelf;
