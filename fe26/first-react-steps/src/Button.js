import React, { Component } from 'react';
import './Button.css';

//props: label, onClick

class Button extends Component {

  state = {
    count: 0,
    visible: false
  }

  render () {
    return (
      <button
        onClick={this.props.onClick}
        className="button"
      >
        {this.props.label}
      </button>
    )
  }
}

export default Button;