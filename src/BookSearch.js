import React, { Component } from 'react';

class BookSearch extends Component {
    updateQuery = query => {
        this.props.searchBooks(query);
    }

    render() {
        return (
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    onChange={e => this.updateQuery(e.target.value.trim())}/>
            </div>
        );
    }
}

export default BookSearch;