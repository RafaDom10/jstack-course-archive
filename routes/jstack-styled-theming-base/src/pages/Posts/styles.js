import styled, { keyframes } from 'styled-components';

// * animando a entrada do componente em tela
const fadein = keyframes`
  from { opacity: 0; transform: translateY(50px) }
  to { opacity: 1; transform: translateY(0px) }
`;

export const Container = styled.section`
  margin-top: 24px;
  animation: 2s ${fadein};
`;
