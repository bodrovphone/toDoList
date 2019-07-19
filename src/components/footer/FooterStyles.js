import styled from 'styled-components';

export const FooterStyles = styled.footer`
  height: 40px;
  padding: 20px;
  div,
  button {
    margin: auto;
    font-size: 14px;
    font-weight: normal;
    background-color: #fff;
  }
  .enabled {
    border: 2px solid #c9b9e1;
    border-radius: 6px;
  }
  .filter:hover {
    cursor: pointer;
    outline: 1px solid #dfd8e9;
  }
  .clear-items:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
