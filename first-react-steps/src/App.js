import React, { Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    number: 0
  }

  render () {
    return (
      <div className="App">
        <button onClick={() => {}}>-</button>
        <span>{this.state.number}</span>
        <button>+</button>
      </div>
    );
  }
}

export default App;
