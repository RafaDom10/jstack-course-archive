import React, { useMemo, useState } from 'react';

import './App.css';

export default function UseMemo() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');

  const total = useMemo(() => {
    return (counter * 2 * 3 * 4);
  }, [counter]);

  const handlePlus = () => setCounter((prevState) => prevState + 1);

  return (
    <div>
      <h1>{counter}</h1>
      <h4>{total}</h4>
      <button onClick={handlePlus}>+</button>

      <br/><br/>
      <span>{name}</span>
      <br/>
      <input onChange={e => setName(e.target.value)} />
    </div>
  );
}
