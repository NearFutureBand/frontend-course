//import React, { useState } from 'react';

const crateState = (defaultValue) => {
  let state = defaultValue;

  const updateState = (newState) => {
    state = newState;
  }

  const getState = () => {
    return state;
  }

  return [
    getState(),
    updateState
  ];
}

const [ number, updateState ] = crateState(0);
console.log(number);

updateState(1);

console.log(number);






/*const Counter = () => {
  const [ value, setValue ] = useState(0);

  const plus = () => {
    setValue(value + 1);
  }

  const minus = () => {
    setValue(value - 1);
  }

  return (
    <div>
      <button onClick={minus}>-</button>
      {value}
      <button onClick={plus}>+</button>
    </div>
  )
}

export default Counter;*/
