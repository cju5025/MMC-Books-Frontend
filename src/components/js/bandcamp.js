import { Component } from 'react';

import Header from './header';

export default class Bandcamp extends Component {
    render () {
        return (
            <main id="bandcamp-main">
                <Header />
                <h1>Bandcamp In/Out</h1>
            </main>
        )
    }
}