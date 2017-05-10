import React, { Component } from 'react';
import Formsy from 'formsy-react';
import {browserHistory} from 'react-router';
import Button from './button';

class Form extends Component {
  onSubmit(values) {
    console.log(values);
    browserHistory.push(`/search/${values.query}`);
  }
  render() {
    return (
      <Formsy.Form
        onSubmit={this.onSubmit}
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        {/* Children goes here */}
        {this.props.children}
        <Button type="submit" value={this.props.button}/>
      </Formsy.Form>
    );
  }
}

export default Form;
