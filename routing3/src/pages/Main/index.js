import React, { useEffect } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './style.css';

function MainPage() {

  useEffect(() => {
    (async() => {
      const response = await axios.get('https://serverless-backend-lkpbs3th4.now.sh/api/users');
      console.log(response);
    })()
   
  }, []);

  return (
    <div className="page page-main">

      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default MainPage;
