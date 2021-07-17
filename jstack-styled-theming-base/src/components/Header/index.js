import React from 'react';

import { ThemeContext } from '../../contexts/ThemesContext';

import { Container } from './styles';


// Hight Order function 

function Hoc(ComponentHeader) {
  return class Component extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {(value) => (
            <ComponentHeader {...value} />
          )}
        </ThemeContext.Consumer>
      );
    }
  }
}

class Header extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.theme !== prevProps.theme) {
      console.log('Tema mudou..');
    }
  }

  render() {
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button
          type="button"
          onClick={this.props.handleToggleTheme}
        >
          {this.props.theme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    );
  }
}

export default Hoc(Header);

/* // Refatorando com  class component
export default class Header extends React.Component {
  render() {

    return (
      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button
              type="button"
              onClick={handleToggleTheme}
            >
              {theme === 'dark' ? '🌞' : '🌚'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
} */

// export default function Header({ onToggleTheme, selectedTheme }) {
//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button 
//         type="button" 
//         onClick={onToggleTheme}
//       >
//         {selectedTheme === 'dark' ? '🌞' : '🌚'}
//       </button>
//     </Container>
//   );
// }