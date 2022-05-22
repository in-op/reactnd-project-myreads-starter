import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';


class MainPage extends Component {
    render() {
        const { books, moveBook } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf
                            title="Currently Reading"
                            books={books.filter(b => b.shelf === 'currentlyReading')}
                            moveBook={moveBook}
                        />
                        <Shelf
                            title="Want to Read"
                            books={books.filter(b => b.shelf === 'wantToRead')}
                            moveBook={moveBook}
                        />
                        <Shelf
                            title="Read"
                            books={books.filter(b => b.shelf === 'read')}
                            moveBook={moveBook}
                        />
                    </div>
                </div>
                <Link to='/search'>
                    <div className="open-search">
                        <button >Add a book</button>
                    </div>
                </Link>
            </div>
        );
    }
}

export default MainPage;