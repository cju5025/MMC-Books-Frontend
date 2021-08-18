import { Component } from 'react';

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
            <Dashboard />
            :
            <>
            </>
          }
        </main>
      </div>
      
    )
  }
}
