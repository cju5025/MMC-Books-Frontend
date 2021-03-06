import { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import './components/css/meyer-reset.css';

import SignUp from './components/js/sign-up';
import SignIn from './components/js/sign-in';
import Home from './components/js/home';
import Soundcloud from './components/js/soundcloud';
import Bandcamp from './components/js/bandcamp';
import Merch from './components/js/merch';
import Shows from './components/js/shows';
import Misc from './components/js/misc';
import Overview from './components/js/overview';

export default class App extends Component {
  render () {
    return (
      <div id="app">
        <main id="main">
        <Route path="/sign-up" render={(routerProps) => <SignUp {...routerProps} />} />
        <Route path="/sign-in" render={(routerProps) => <SignIn {...routerProps} />} />
        <Route path="/home" render={(routerProps) => <Home {...routerProps} />} />
        <Route path="/soundcloud" render={(routerProps) => <Soundcloud {...routerProps} />} />
        <Route path="/bandcamp" render={(routerProps) => <Bandcamp {...routerProps} />} />
        <Route path="/merch" render={(routerProps) => <Merch {...routerProps} />} />
        <Route path="/shows" render={(routerProps) => <Shows {...routerProps} />} />
        <Route path="/misc" render={(routerProps) => <Misc {...routerProps} />} />
        <Route path="/overview" render={(routerProps) => <Overview {...routerProps} />} />
        </main>
      </div>
      
    )
  }
}

