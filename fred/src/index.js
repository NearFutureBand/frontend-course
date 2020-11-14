import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import App, { f1, f2 } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App defaultNumber={2} />
    <App defaultNumber={6} />
    <App defaultNumber={-1} />
  </React.StrictMode>,
  document.getElementById('root')
);