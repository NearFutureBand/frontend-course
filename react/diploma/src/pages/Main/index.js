import React from 'react';
import logo from './logo.svg';
import './style.css';

function MainPage() {
  return (
    <div className="page">
      <div className="page-main">
        <div className='label-area'>
          <span className='page-label main-label'>{`JUST FOR EXAMPLE`}</span>
        </div>
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
    </div>
  );
}

export default MainPage;
