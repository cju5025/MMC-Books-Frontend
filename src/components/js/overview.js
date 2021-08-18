import { Component } from 'react';

import Header from './header';

export default class Overview extends Component {
    render () {
        return (
            <main id="overview">
                <Header />
                <h1>Overview</h1>
            </main>
        )
    }
}