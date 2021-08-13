import { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SignUp from './sign-up';
import SignIn from './sign-in';

export default class Home extends Component {
  render () {
    return (
      <div id="Home">
        <main id="main-Home">
        <Link id="sign-in-link" to="/sign-in">Sign In</Link>
        <Link id="sign-up-link" to="/sign-up">Sign Up</Link>
        <Route path="/sign-up" render={(routerProps) => <SignUp {...routerProps} />} />
        <Route path="/sign-in" render={(routerProps) => <SignIn {...routerProps} />} />
        </main>
      </div>
      
    )
  }
}
