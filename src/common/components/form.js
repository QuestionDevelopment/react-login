import React, { Component } from 'react';
import Formsy from 'formsy-react';

class Form extends Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <Formsy.Form
        onSubmit={this.onSubmit}
      >
        {/* Children goes here */}
        {this.props.children}
      </Formsy.Form>
    );
  }
}

export default Form;