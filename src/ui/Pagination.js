import { createGlobalStyle } from 'styled-components';

export const UsePaginationStyle = createGlobalStyle`
  .pagination {
    display: flex;
    justify-content: center;
    width: 400px;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 1.4rem;

    .page {
      margin: 0 10px;
      cursor: pointer;
    }

    .active {
      color: #0091FF
    }
  }
`;
