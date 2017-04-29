import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <section id="hero" className="hero u-full-width">
        <div className="hero-image"></div>
        <div className="container centered">
          <div className="twelve columns">
            <h1 className="separator">We've got talent</h1>
            <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa.</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
