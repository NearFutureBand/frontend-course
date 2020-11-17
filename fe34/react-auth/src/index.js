import React from 'react';
import ReactDOM from 'react-dom';
import Router from './navigation/Router';
//import HookState from './components/HookState';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

