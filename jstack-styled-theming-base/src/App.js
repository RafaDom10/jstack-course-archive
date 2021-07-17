import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import { ThemeContext, ThemeProvider } from './contexts/ThemesContext';
import GlobalStyle from './styles/global';
import themes from './styles/themes';

// refatorando com class component
class App extends React.Component { 
  
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}


/*function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const currenTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={currenTheme}>
      <GlobalStyle />
      <Layout 
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}
      />
    </ThemeProvider>
  );
};*/

export default App;
