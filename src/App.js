import { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import './components/css/meyer-reset.css';

import SignUp from './components/js/sign-up';
import SignIn from './components/js/sign-in';
import Home from './components/js/home';

export default class App extends Component {
  render () {
    return (
      <div id="App">
        <main id="main">
        <Route path="/sign-up" render={(routerProps) => <SignUp {...routerProps} />} />
        <Route path="/sign-in" render={(routerProps) => <SignIn {...routerProps} />} />
        <Route path="/home" render={(routerProps) => <Home {...routerProps} />} />
        </main>
      </div>
      
    )
  }
}

