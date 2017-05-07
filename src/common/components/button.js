import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <button>
          {this.props.value}xxx
        </button>
      </div>
    );
  }
}

export default Button;
