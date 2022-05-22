import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
    state = {
        bookshelfBooks: [],
        searchResults: [],
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
        this.moveBook(book, shelf, 'searchResults');
    }

    search = query => {
        BooksAPI.search(query)
            .then(books => {
                if (!Array.isArray(books)) {
                    this.setState({searchResults: []});
                } else {
                    this.setState({searchResults: books});
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
                                searchResults={this.state.searchResults}
                                bookshelfBooks={this.state.bookshelfBooks}
                                search={this.search} 
                                moveBook={this.moveBookOnSearchPage}/>
                            }
                    />
                </Routes>
            </div>
        )
    }
}

export default BooksApp
