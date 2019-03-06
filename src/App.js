import React, { Component } from 'react';
import './Header.css';
import User from './User';

class App extends Component {
  render() {
    return (
      <div className="header">
        <User/>
      </div>
    );
  }
}

export default App;
