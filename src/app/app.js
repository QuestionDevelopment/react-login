import React, { Component } from 'react';
import Navigation from './components/navigation';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Navigation/>
        <div id='panel'>
          <Header/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
