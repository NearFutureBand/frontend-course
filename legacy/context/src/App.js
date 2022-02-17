import React, { Component } from 'react';

import Image from './components/Image';
import Anchor from './components/Anchor';
import Paragraph from './components/Paragraph';
import ThemeContext from './ThemeContext';
import './App.css';

class App extends Component {
  render () {
    return (
      <ThemeContext.Provider value="dark">
        <div className="App">
          <header className="App-header">
            <Image />
            <Paragraph />
            <Anchor />
          </header>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
