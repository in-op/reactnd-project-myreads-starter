import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookGrid from './BookGrid';

class SearchPage extends Component {
    render() {
        const { books } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">
                            Close
                        </button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        { }
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookGrid books={books}/>
                </div>
            </div>
        )
    }
}

export default SearchPage;