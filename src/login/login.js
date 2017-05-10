import React, { Component } from 'react';
import Formsy from 'formsy-react';
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
  async submit(model) {
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
        <Form id="home-page-search" button="Search">
          <Text name="email" validations="isEmail" validationError="This is not a valid email" required/>
          <Text name="password" validations="isEmail" validationError="This is not a valid password" required/>
        </Form>
      </div>
    );
  }
}

export default Login;
