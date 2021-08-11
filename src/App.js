import './App.css';
import './components/js/sign-up';

import { Component } from 'react';
import SignUp from './components/js/sign-up';

export default class App extends Component {
  render () {
    return (
      <div id="App">
        <SignUp />
      </div>
    )
  }
}

