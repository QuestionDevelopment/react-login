import React, { Component } from 'react';
import Formsy from 'formsy-react';
import Button from './button';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    };

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  enableButton() {
    this.setState({
      canSubmit: true
    });
  }
  disableButton() {
    this.setState({
      canSubmit: false
    });
  }
  onSubmit(values) {
    this.props.onSubmit(values);
  }
  render() {
    return (
      <Formsy.Form
        className="formComponent"
        onSubmit={this.onSubmit}
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        {/* Children goes here */}
        {this.props.children}
        <Button type="submit" style={`button ${this.state.canSubmit ? 'button-primary' : 'button-secondary'}`} value={this.props.button ? this.props.button : 'Submit'} />
      </Formsy.Form>
    );
  }
}

export default Form;
