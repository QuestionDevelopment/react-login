import React from 'react';
import { Route } from 'react-router';

import App from './App';
import Home from './home/home';
import Login from './login/login';
import Search from './search/search';

class Routes extends React.Component {
  render() {
    return (
      <Route path="/" component={App}>
        <Route exact path="/" component={Home}/>
        <Route path="/login"  component={Login} />
        <Route path="/search/(:parms)" component={Search} />
      </Route>
    )
  }
}

export default Routes;
