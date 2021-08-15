import { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Header from './header';
import Dashboard from './dashboard';

export default class Home extends Component {
  render () {
    return (
      <div id="Home">
        <Header />
        <main id="main-Home">
          {
            localStorage.getItem('token')
            ?
            <>
            <h1> Welcome In Mothafucka! </h1>
            <Dashboard />
            </>
            :
            <>
            </>
          }
        </main>
      </div>
      
    )
  }
}
