import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="btn-hamburger slideout-toggle">
          <div className="toggle-button">☰</div>
          <div className="tooltip"><div className="tooltip-inner">Open Menu</div></div>
        </div>
        <h1>Product Review Site</h1>
      </div>
    );
  }
}

export default Header;
