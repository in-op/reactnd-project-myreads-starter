import React, { Component } from 'react';
import BookGrid from './BookGrid';


class MainPage extends Component {
    render() {
        const { books } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <BookGrid
                                    books={books.filter(b => b.shelf === 'currentlyReading')}
                                />
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <BookGrid
                                    books={books.filter(b => b.shelf === 'wantToRead')}
                                />
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                            <BookGrid
                                    books={books.filter(b => b.shelf === 'read')}
                                />
                            </div>
                        </div>
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