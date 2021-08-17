import { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SignUp from './sign-up';
import SignIn from './sign-in';

import '../css/header.css';

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
            <Link class='link' to='/home' onClick={this.signOut}>Sign Out</Link>
            <Link class='link' to='/home'>Home</Link>
            </>
            :
            <>
            <Link class='link' to="/sign-in">Sign In</Link>
            <Link class='link' to="/sign-up">Sign Up</Link>
            </>
        }
        <Route path="/sign-up" render={(routerProps) => <SignUp {...routerProps} />} />
        <Route path="/sign-in" render={(routerProps) => <SignIn {...routerProps} />} />
      </header>
      
    )
  }
}