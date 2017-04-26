import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import Routes from './routes';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history} >
    <Routes />
  </Router>
  ,
  document.getElementById('root')
);
