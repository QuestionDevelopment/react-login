import React, { Component } from 'react';
import Text from '../../common/components/text';
import Form from '../../common/components/form';
import Button from '../../common/components/button';

class Login extends Component {
  render() {
    return (
      <div>
        <div>Login</div>
        <Form>
          <Text />
          <Text />
          <Button value="Submit" />
        </Form>
      </div>
    );
  }
}

export default Login;