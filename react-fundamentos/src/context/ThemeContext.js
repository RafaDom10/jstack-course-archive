import React, { useState, createContext } from 'react';

export const ThemeContext = createContext('dark');

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('light');

  function handleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'light' ? 'dark' : 'light'
    ));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
