import React, { Component } from 'react';
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <Navigation/>
      {this.props.children}
    );
  }
}

export default App;
