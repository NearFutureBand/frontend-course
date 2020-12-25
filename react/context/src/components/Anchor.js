import React, { Component } from 'react';
import withTheme from '../HOC/withTheme';

class Anchor extends Component {

  render () {
    console.log(this.props);

    return (
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    )
  }
}

export default withTheme(Anchor);