import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        {/* Children goes here */}
        {this.props.children}
      </form>
    );
  }
}

export default Form;