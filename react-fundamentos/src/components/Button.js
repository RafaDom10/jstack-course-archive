import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const MyButton = styled.button`
  margin-left: 18px;
  cursor: pointer;
  /* :hover {
    background: red;
  } */
`;

import { ThemeContext } from '../context/ThemeContext';

export default function Button(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <MyButton
      onClick={props.onClick}
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'dark' ? '#000' : '#fff',
      }}
    >
      {props.children}
    </MyButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}
