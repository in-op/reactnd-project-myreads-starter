import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
    state = {
        bookshelfBooks: [],
        searchBooks: [],
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(books => this.setState({bookshelfBooks: books}));
    }

    moveBook = (book, shelf, bookListName) => {
        BooksAPI.update(book, shelf)
            .then(response => {
                book.shelf = shelf;
                this.setState(state => {
                    const newState = {};
                    newState[bookListName] = state[bookListName]
                        .filter(b => b.id !== book.id)
                        .concat([ book ]);
                    return newState
                });
            });
    }

    moveBookOnMainPage = (book, shelf) => {
        this.moveBook(book, shelf, 'bookshelfBooks');
    }

    moveBookOnSearchPage = (book, shelf) => {
        this.moveBook(book, shelf, 'searchBooks');
    }

    searchBooks = query => {
        BooksAPI.search(query)
            .then(books => {
                if (!Array.isArray(books)) {
                    this.setState({searchBooks: []});
                } else {
                    this.setState({searchBooks: books});
                }
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
                                moveBook={this.moveBookOnMainPage}/>
                        }
                    />
                    <Route
                        path='/search'
                        element={
                            <SearchPage
                                books={this.state.searchBooks}
                                searchBooks={this.searchBooks} 
                                moveBook={this.moveBookOnSearchPage}/>
                            }
                    />
                </Routes>
            </div>
        )
    }
}

export default BooksApp
