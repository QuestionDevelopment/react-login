import React, { Component } from 'react';
import Form from '../common/components/form';
import Text from '../common/components/text';

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
  // onSubmit(values) {
  //   console.log(values);
  // }

  async onSubmit(model) {
    console.log('test');
    // async function () {
    //   try {
    //     data = await api.('as');
    //   } catch (e) {
    //     // error
    //   }
    //   if (data) {
    //     browserHistory.push('/dashboard');
    //   } else {
    //     this.setState{
    //       errorMsg: 'Password is wrong'
    //     }
    //   }
    // }
  }
  render() {
    return (
      <div>
        <div>Login</div>
        <Form id="login-form" button="Login" onSubmit={this.onSubmit}>
          <Text name="email" validations="isEmail" validationError="This is not a valid email" required/>
          <Text name="password" validations="isLength:7" validationError="This is not a valid password.  It must be 7 characters long" required/>
        </Form>
      </div>
    );
  }
}

export default Login;
