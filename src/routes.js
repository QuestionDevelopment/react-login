import React from 'react';
import { Route } from 'react-router';
import Login from '../src/login/components/login';

class Routes extends React.Component {
  render() {
    return (
      <Route path="/" compnent={App}>
        {/* <IndexRedirect "/" component={Login} />
        </home> */}
        <Route path="/login"  component={Login} />
        <Route path="/search/(:parms)" component={Search} />
      </Route>
    )
  }
}

export default Routes;
