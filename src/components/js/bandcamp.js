import { Component } from 'react';

import Header from './header';
import '../css/expense-page.css';

export default class Bandcamp extends Component {
    render () {
        return (
            <>
            <Header />
            <main className="expense">
                <h1>Bandcamp In/Out</h1>
            </main>
            </>
        )
    }
}