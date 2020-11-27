import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 1) Импортируется Provider - это специальный компонент, который
 * обеспечивает видимость стора для всех компонентов ниже по дереву
 * JSX-элементов. Поэтому лучше всего обернуть самый главный компонент
 */
import { Provider } from 'react-redux';
/**
 * 3) Для того чтобы создать стор, нужна функция его создающая 
 */
import { createStore } from 'redux';

import './index.css';
import App from './App';
import reducer from './reducer';

/**
 * 4) Функция createStore принимает в себя редьюсер. Созданный
 * стор кидаем в переменную store
 */
const store = createStore(reducer);
console.log(store);

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
