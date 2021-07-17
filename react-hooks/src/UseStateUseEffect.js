import React, { useState, useEffect } from 'react';

import './App.css';

export default function UseStateUseEffect() {
  // * Exemplificando o useState
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  function handlePlus() {
    // ! Maneira errada de se fazer
    //   setCounter(counter + 1);

    // * Maneira correta utilizando o prevState
    setCounter((prevState) => prevState + 1)
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  // * Exemplificando o useEffect
  useEffect(() => {
    console.log('useEffect rodou!')
  }, []); // executa apenas uma vez

  useEffect(() => {
    console.log('counter');
  }, [counter]); // executa quando houver modificações no counter

  useEffect(() => {
    console.log('name');
  }, [name]); // executa quando houver modificações no name

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>

      <br/>
      <span>{name}</span>
      <br/>
      <input onChange={e => setName(e.target.value)} />
    </>
  );
}
