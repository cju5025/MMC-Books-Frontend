import { Component } from 'react';

export default class SearchBar extends Component {
    render () {
        return (
            <div id="searchbar-container">
                <input id="searchbar" placeholder="search..."></input>
            </div>
        )
    }
} 