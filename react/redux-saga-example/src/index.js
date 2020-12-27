import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';

/**
 * 1) Импортируется Provider - это специальный компонент, который
 * обеспечивает видимость стора для всех компонентов ниже по дереву
 * JSX-элементов. Поэтому лучше всего обернуть самый главный компонент
 */
import { Provider } from 'react-redux';
/**
 * 3) Для того чтобы создать стор, нужна функция его создающая 
 */
import { applyMiddleware, createStore } from 'redux';

import './index.css';
import App from './App';
import reducer from './reducer';
import rootSaga from './saga';


/** Создание middleware для store*/
const sagaMiddleware = createSagaMiddleware();

/**
 * 4) Функция createStore принимает в себя редьюсер. Созданный
 * стор кидаем в переменную store. Второй параметр в createStore - это
 * различные middleware, которые могут добавлять редаксу больше функциональностей.
 * Например, работать с асинхронными экшенами
 */
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
console.log(store);


// Запуск наблюдения за экшенами
sagaMiddleware.run(rootSaga);

/**
 * 2) Provider оборачивает главный компонент и ожидает проп store
 * 5) Переменная store передается в проп store компонента Provider
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
