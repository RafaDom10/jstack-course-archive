import React,{ useState, useCallback} from 'react';

import './App.css';

export default function UseCallback() {
  const [counter, setCounter] = useState(0);

  // * usar o useCallback apenas quando precisar passar uma function para componentes filhos

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={handlePlus} />
    </div>
  );
}

function Button(props) {
  return (
    <button onClick={props.onClick}> + </button>
  );
}
