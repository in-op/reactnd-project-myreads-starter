import React, { Component } from 'react';

class Shelf extends Component {
    render() {
        const { title, books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookGrid
                        books={books}
                    />
                </div>
            </div>
        );
    }
}

export default Shelf;
