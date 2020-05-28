import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import './index.css';
import Navigator from './navigation';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk, reduxLogger));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Navigator />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

