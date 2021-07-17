import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import Button from '../Button';

// import styled from 'styled-components';

// styled component externo
import Title from '../Title';

import { ThemeContext } from '../../context/ThemeContext';

/*
styled dentro do componente

const Title = styled.h1`
  color: #637BF3;
`;
 */

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
    </>
  )
}

// Tipando props
Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

// Definindo props defaut
Header.defaultProps = {
  title: `JStack's Blog`,
};
