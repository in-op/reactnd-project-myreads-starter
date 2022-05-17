import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookGrid from './BookGrid';
import BookSearch from './BookSearch';

class SearchPage extends Component {
    render() {
        const { books, searchBooks} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">
                            Close
                        </button>
                    </Link>
                    <BookSearch searchBooks={searchBooks}></BookSearch>
                </div>
                <div className="search-books-results">
                    <BookGrid books={books}/>
                </div>
            </div>
        )
    }
}

export default SearchPage;