import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigator from './navigation';

import firebaseConfig from './config/firebaseConfig';
import firebase from 'firebase';
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <Navigator />
  </React.StrictMode>,
  document.getElementById('root')
);
