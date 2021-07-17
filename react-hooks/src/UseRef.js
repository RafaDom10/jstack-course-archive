import React, { useRef } from 'react';

import './App.css';

export default function UseRef() {
  console.log('rendered');

  const number = useRef(0); // gera um obj {current}

  const handleSetValue = () => {
    const newNumber = Math.round(Math.random() * (10 - 1) + 1);
    number.current = newNumber
  }

  const handlePrintValue = () => {
    alert(number.current);
  }

  return (
    <div>
      <button onClick={handleSetValue} >Set Value</button>
      <button onClick={handlePrintValue} >Print value</button>
    </div>
  )
}
