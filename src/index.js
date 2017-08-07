import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import Routes from './routes';
import { store } from './store';
import { listeningUser } from './actions/user';
import { setLimit } from './actions/filters';

import './styles/index.css';

store.dispatch(listeningUser());
store.dispatch(setLimit());

ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
