import React, { Component } from 'react';
import Shelf from './Shelf';


class MainPage extends Component {
    render() {
        const { books, moveBook } = this.props
        console.log('books', books);
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
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        );
    }
}

export default MainPage;