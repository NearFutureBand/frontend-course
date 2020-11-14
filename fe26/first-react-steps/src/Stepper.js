import React, { Component } from 'react';
import './Stepper.css';
import Button from './Button';

class Pencil {
  length = 10;

  draw () {
    console.log(this);
  }
}

class Stepper extends Component {

  state = {
    number: 1,
    visible: true,
  }

  plus = (param) => {
    this.setState({
      number: this.state.number + param,
    });
  }

  minus = () =>  {
    this.setState({
      number: this.state.number - 1,
    })
  }

  render () {
    return (
      <div className="App">
        <span>{this.props.title}</span>
        <div className="buttons">
          <Button
            label="sds"
            onClick={() => {
              const HB = new Pencil();
            }}
          />
          <Button
            label="-"
            onClick={this.minus}
          />
          <span className="text">{this.state.number}</span>
          <Button
            label={'+'}
            onClick={() => this.plus(3)}
          />
        </div>
      </div>
    )
  }
}

export default Stepper;
