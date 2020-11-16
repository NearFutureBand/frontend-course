import React, { useState } from 'react';


const Counter = () => {

  /*state = {
    value: 0,
    loading: false
  }*/

  const [ value, setValue ] = useState(0);

  const plus = () => {
    //this.setState({ value: })
    setValue(value + 1);
  }

  return (
    <div>
      <button onClick={plus}>-</button>
      
      <button>+</button>
    </div>
  )
}

export default Counter;
