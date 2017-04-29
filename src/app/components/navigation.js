import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav class="navigation">
        <a href="#" class="menu-icon">
          <i class="fa fa-bars"></i>
        </a>
        <ul class="main-navigation">
          <li><a href="#hero">Home</a></li>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#creativity">Creativity</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#help">Help</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#video">Video</a></li>
          <li><a href="#why-us">Why us?</a></li>
          <li><a href="#quote">Quote</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
