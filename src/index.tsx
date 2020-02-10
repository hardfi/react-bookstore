import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
