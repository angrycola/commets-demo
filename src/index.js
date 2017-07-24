import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import Routes from './routes';
import { store } from './store';
import './styles/index.css';


ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
