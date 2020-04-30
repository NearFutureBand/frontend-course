import React, { Component } from 'react';
import './style.css';

class TextInput extends Component {
  render() {
    return (
      <div className="text-input">
        <span>{this.props.label}</span>
        <input
          type="text"
          onChange={this.props.onChangeFromProps}
          value={this.props.valueFromProps}
        />
      </div>
    )
  }
}

export default TextInput;
