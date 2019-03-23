import { createGlobalStyle } from 'styled-components';

export const UseGlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #212223;
  }
`;
