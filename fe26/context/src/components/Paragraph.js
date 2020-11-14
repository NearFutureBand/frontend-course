import React, { Component } from 'react'
import ThemeContext from '../ThemeContext';
import themes from '../themes.json';

export default class Paragraph extends Component {

  //static contextType = ThemeContext;
  
  render () {
    //console.log({ context: this.context, theme: themes[this.context] });
    return (
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    )
  }
}