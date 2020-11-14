import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class TextInput extends Component {
  render() {
    return (
      <div className="text-input">
        <span className="label">{this.props.label}</span>
        <input
          type="text"
          className="input"
          onChange={this.props.onChangeFromProps}
          value={this.props.valueFromProps}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  onChangeFromProps: PropTypes.func,
  valueFromProps: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  label: '',
  onChangeFromProps: () => {},
};

export default TextInput;
