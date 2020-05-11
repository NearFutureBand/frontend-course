import React, { Component } from 'react';
import './style.css';

class Loader extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    )
  }
}

export default Loader;
