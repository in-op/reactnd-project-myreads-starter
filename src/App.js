import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
    state = {
        bookshelfBooks: [],
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(books => this.setState({bookshelfBooks: books}));
    }

    moveBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(response => {
                book.shelf = shelf;
                this.setState(state => ({
                    bookshelfBooks: state.bookshelfBooks
                        .filter(b => b.id !== book.id)
                        .concat([ book ]),
                }));
            });
    }

    render() {
        return (
            <div className="app">
                <Routes>
                    <Route
                        path='/'
                        element={
                            <MainPage
                                books={this.state.bookshelfBooks}
                                moveBook={this.moveBook}/>
                        }
                    />
                    <Route
                        path='/search'
                        element={
                            <SearchPage
                                bookshelfBooks={this.state.bookshelfBooks}
                                moveBook={this.moveBook}/>
                            }
                    />
                </Routes>
            </div>
        )
    }
}

export default BooksApp
