import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import BookGrid from './BookGrid';
import BookSearch from './BookSearch';

class SearchPage extends Component {
    state = {
        searchResults: [],
    }

    search = query => {
        BooksAPI.search(query)
            .then(books => {
                this.setState({
                    searchResults: Array.isArray(books) ? books : [],
                });
            });
    }

    render() {
        const { bookshelfBooks, moveBook} = this.props;

        const bookshelfBooksById = new Map(bookshelfBooks.map(b => [b.id, b]));
        const books = this.state.searchResults.map(book => {
            book.shelf = bookshelfBooksById.has(book.id) ?
                bookshelfBooksById.get(book.id).shelf : 'none';
            return book;
        });

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">
                            Close
                        </button>
                    </Link>
                    <BookSearch search={this.search}></BookSearch>
                </div>
                <div className="search-books-results">
                    <BookGrid books={books} moveBook={moveBook}/>
                </div>
            </div>
        )
    }
}

export default SearchPage;
