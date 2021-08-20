import { Component } from 'react';

import Header from './header';
import Expense from './expense';
import '../css/overview.css';

export default class Overview extends Component {
    
    componentDidMount = () => {
        fetch("http://localhost:4000/expenses")
            .then(response => response.json())
            .then(console.log)
    }
    
    render () {
        return (
            <main id="overview">
                <Header />
                <h1>Overview</h1>
                <Expense />
            </main>
        )
    }
}