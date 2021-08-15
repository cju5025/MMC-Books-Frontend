import { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SignUp from './sign-up';
import SignIn from './sign-in';

export default class Home extends Component {

    signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        window.location.reload()
    }

  render () {
    return (
      <header id="header">
        {
            localStorage.getItem('token')
            ?
            <>
            <Link id='signout-link' to='/home' onClick={this.signOut}>Sign Out</Link>
            <Link id='home-link' to='/home'>Home</Link>
            </>
            :
            <>
            <Link id="sign-in-link" to="/sign-in">Sign In</Link>
            <Link id="sign-up-link" to="/sign-up">Sign Up</Link>
            </>
        }
        <Route path="/sign-up" render={(routerProps) => <SignUp {...routerProps} />} />
        <Route path="/sign-in" render={(routerProps) => <SignIn {...routerProps} />} />
      </header>
      
    )
  }
}