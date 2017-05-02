import React, { Component } from 'react';
import Formsy from 'formsy-react';
// 'react-router'

class Form extends Component {
  onSubmit(values) {
    console.log(values);
    browserHistory.push(`/search/${values.query}`);
  }

  // onInvalid() {
  //   this.setState({
  //     canSubmit: false,
  //   });
  // }

  render() {
    // let className = "button";
    // if (this.state.canSubmit) {
    //   className += 'button-primary';
    // } else {
    //   className += 'button-secondary';
    // }
    return (
      <Formsy.Form
        onSubmit={this.onSubmit}
      >
        {/* Children goes here */}
        {this.props.children}
        <Button className={`button ${this.state.canSubmit ? 'button-primary' : 'button-secondary'}`} value="Submit" />
      </Formsy.Form>
    );
  }
}

export default Form;
