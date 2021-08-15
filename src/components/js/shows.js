import { Component } from 'react';

import Header from './header';

export default class Shows extends Component {
    render () {
        return (
            <main id="shows-main">
                <Header />
                <h1>Shows In/Out</h1>
            </main>
        )
    }
}