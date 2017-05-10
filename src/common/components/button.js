import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button className={this.props.style} type={this.props.type}>
                {this.props.value}
            </button>
        );
    }
}

export default Button;
