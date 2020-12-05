import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import Router from './navigation/Router';
import './index.css';

/**
 * 1) createStore как обычно выполняется и создает стор, но при этом также он отвечает
 * и за инициализацию middlewares, которых может быть несколько. Грубо говоря, middleware
 * обеспечивают дополнительне нестандартные возможности для нашего редакс-хранилища. Например,
 * возможность работы с асинхронными экшенами, что и реализовано в библиотеке redux-thunk.
 * Для подключения middleware нужно вызвать функцию applyMiddleware и передать ее вторым
 * параметром после редьюсера при создании стора. На compose и большую строку с window. ...
 * обращать внимания не нужно - эта строка нужна для того, чтобы работал redux-devtools в хроме
 * 
 * по итогу без всяких девтулз, все должно выглядеть так:
 * const store = createStore(
 *    reducer,
 *    applyMiddleware(thunk)
 * )
 */

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);