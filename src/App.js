import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
    state = {
        books: [],
    }

    componentDidMount() {
        BooksAPI.getAll()
          .then(books => this.setState({books}));
    }

    render() {
        return (
            <div className="app">
                <Routes>
                    <Route path='/' element={<MainPage books={this.state.books}/>}/>
                    <Route path='/search' element={<SearchPage books={this.state.books}/>} />
                </Routes>
            </div>
        )
    }
}

export default BooksApp
