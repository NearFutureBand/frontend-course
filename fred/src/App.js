import React from 'react';
import './App.css';

class App extends React.Component {

  // Стейт можно создавать прямо здесь, без конструктора.
  // Обязательно переменная должна называться state
  // В объект state нужно добавлять переменные состояния для нашего компонента
  // Доступ к пропсам (атрибутам) осуществляется через объект this.props
  state = {
    number: this.props.defaultNumber,
  }

  // Чтобы изменить переменную состояния компонента нужно вызвать метод this.setState
  // Он принимает объект, в который нужно передать новое значение для каждой из переменных состояния
  plus = () => {
    this.setState({ number: this.state.number + 1});
  }

  minus = () => {
    this.setState({ number: this.state.number - 1});
  }

  // В любом методе доступ к переменной состояния осуществляется через this.state
  render () {
    return (
      <div className="App">
        <button onClick={this.minus}>-</button>
        {this.state.number}
        <button onClick={this.plus}>+</button>
      </div>
    );
  }
}

export default App;
