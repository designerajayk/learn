import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Geetings from './components/Geetings';
import SignupPage from './components/SignupPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Geetings} />
    <Route path="signup" component={SignupPage} />
  </Route>
)
