import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookGrid from './BookGrid';
import BookSearch from './BookSearch';

class SearchPage extends Component {
    render() {
        const { searchResults, bookshelfBooks, search, moveBook} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">
                            Close
                        </button>
                    </Link>
                    <BookSearch search={search}></BookSearch>
                </div>
                <div className="search-books-results">
                    <BookGrid books={searchResults} moveBook={moveBook}/>
                </div>
            </div>
        )
    }
}

export default SearchPage;