import React, { Component } from 'react';
import Formsy from 'formsy-react';
import Text from '../../common/components/text';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    };

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
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
  submit(model) {
    
  }
  render() {
    return (
      <div>
        <div>Login</div>
        <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <Text name="email" validations="isEmail" validationError="This is not a valid email" required/>
          <Text name="password" validations="isEmail" validationError="This is not a valid password" required/>
          <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
        </Formsy.Form>
      </div>
    );
  }
}

export default Login;