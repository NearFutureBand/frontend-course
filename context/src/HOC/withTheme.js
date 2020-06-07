import React, { Component} from 'react';
import themes from '../themes.json';
import ThemeContext from '../ThemeContext';

const withTheme = (WrappedComponent) => {
  
  return class extends Component {

    static contextType = ThemeContext;

    render () {
      return (
        <WrappedComponent
          theme={themes[this.context]}
          test={42}
        />
      )
    }
  }
}

export default withTheme;