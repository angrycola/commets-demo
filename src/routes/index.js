import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from '../components/App';

const history = createHistory();

export default () => (
  <BrowserRouter history={ history }>
    <div>
      <Route path='/' exact component={ App } />      
    </div>
  </BrowserRouter>
);
