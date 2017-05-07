import React, { Component } from 'react';
import Formsy from 'formsy-react';
import {browserHistory} from 'react-router';
import {Button} from './button';

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
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        {this.props.children}
        <Button className={`button ${this.state.canSubmit ? 'button-primary' : 'button-secondary'}`} value={`${this.props.button ? this.props.button : 'Submit'}`} />
      </Formsy.Form>
    );
  }
}

export default Form;
