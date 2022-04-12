import React, { Component } from 'react';

class ShelfSelection extends Component {
    onChange = e => this.props.changeShelf(e.target.value);

    render() {
        return (
            <select onChange={this.onChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        );
    }
}

export default ShelfSelection;
