import React, { Component } from 'react';
import Shelf from './Shelf';


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
                        <Shelf
                            title="Currently Reading"
                            books={books.filter(b => b.shelf === 'currentlyReading')}
                        />
                        <Shelf
                            title="Want to Read"
                            books={books.filter(b => b.shelf === 'wantToRead')}
                        />
                        <Shelf
                            title="Read"
                            books={books.filter(b => b.shelf === 'read')}
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