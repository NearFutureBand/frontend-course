import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Stepper from './Stepper';

ReactDOM.render(
  <React.StrictMode>
    <Stepper title="unicorns" />
    <Stepper title="cars" />
  </React.StrictMode>,
  document.getElementById('root')
);
