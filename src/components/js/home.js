import { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SignUp from './sign-up';
import SignIn from './sign-in';
import Header from './header';

export default class Home extends Component {
  render () {
    return (
      <div id="Home">
        <Header />
        <main id="main-Home">
          <h1> Welcome In Mothafucka! </h1>
        </main>
      </div>
      
    )
  }
}
