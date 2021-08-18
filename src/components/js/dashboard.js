import { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/dashboard.css'

export default class Dashboard extends Component {
    render () {
        return (
            <main id="dashboard">
                <h1>Dashboard</h1>
                <div id="button-container">
                    <section id="button-section-one">
                        <Link id="soundcloud-link" to="/soundcloud" >
                            <button id="soundcloud-button">Soundcloud</button>
                        </Link>
                        <Link id="bandcamp-link" to="/bandcamp" >
                            <button id="bandcamp-button">Bandcamp</button>
                        </Link>
                        <Link id="shows-link" to="/shows" >
                            <button id="shows-button">Shows</button>
                        </Link>
                    </section>
                    <section id="button-section-two">
                        <Link id="merch-link" to="/merch" >
                            <button id="merch-button">Merch</button>
                        </Link>
                        <Link id="misc-link" to="/misc" >
                            <button id="misc-button">Misc</button>
                        </Link>
                        <Link id="overview-link" to="/overview">
                            <button id="overview-button">Overview</button>
                        </Link>
                    </section>
                </div>
            </main>
        )
    }
}