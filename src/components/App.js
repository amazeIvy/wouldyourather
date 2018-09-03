import React, { Component } from 'react';
import Nav from './Nav';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Login />
      </div>
    );
  }
}

export default App;
