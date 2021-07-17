import React, { createContext, useContext } from 'react'

import './App.css';

const ThemeContext = createContext();

export default function Context() {
  return (
    <ThemeContext.Provider
      value={{
        mode: 'light'
      }}
    >
      <Button />
    </ThemeContext.Provider>
  )
}

function Button() {
  const theme = useContext(ThemeContext)

  return (
    <button>{theme.mode}</button>
  );
}
