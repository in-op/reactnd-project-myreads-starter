import React, { Component } from 'react';

class ShelfSelection extends Component {
    state = {
        'value': '',
    }

    componentDidMount() {
        this.setState({'value': this.props.value})
    }

    onChange = e => {
        this.props.changeShelf(e.target.value);
        this.setState({value: e.target.value})
    };

    render() {
        return (
            <select onChange={this.onChange} value={this.state.value}>
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
