import { Component } from 'react';
import '../css/searchbar.css';

export default class SearchBar extends Component {

handleSubmit = (event) => {
    event.preventDefault()
    this.props.setSearchInput(event.target[0].value)
}

    render () {
        return (
            <div id="searchbar-container">
                <form id="search-form" onSubmit={this.handleSubmit}>
                    <input id="search-bar" placeholder="search..."></input>
                </form>
            </div>
        )
    }
} 