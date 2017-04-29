import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div id="menu">
        <section className="menu-section">
          <h3 className="menu-section-title">Site</h3>
          <ul className="menu-section-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Recently Viewed</a></li>
            <li><a href="#">Top Rated</a></li>
            <li><a href="#">Submit New Product</a></li>
          </ul>
        </section>
        <section className="menu-section">
          <h3 className="menu-section-title">Account</h3>
          <ul className="menu-section-list">
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Forgot Password</a></li>
          </ul>
        </section>
        <section className="menu-section">
          <h3 className="menu-section-title">Other</h3>
          <ul className="menu-section-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Navigation;
