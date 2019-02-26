/*
 * Doctored by: Abaddon16
 * Document Function:
 *    - Base level app injection file
 *    - Beginning of routing functionality (top-down approach)
 */

import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';
import './styles/styles.scss';

// Renders the `App`, passing 2 children through the `<Switch>`, these will be passed down to be rendered at a lower level through the `App`
render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>{/* Exact pathing to {Home} because it's greedy matching, it will grab the first partial match if possible*/}
        <Route component={NotFound}/>{/* anything else, catch-all*/}
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
