import React, { Component } from 'react';
import ShelfSelection from './ShelfSelection';

class Book extends Component {
    render() {
        const { title, author, imageURL } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${imageURL}")`,
                    }}></div>
                    <div className="book-shelf-changer">
                    <ShelfSelection changeShelf={() => {}}/>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        );
    }
}

export default Book;
