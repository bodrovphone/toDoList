import styled from 'styled-components';

export const EditableInputStyles = styled.input`
  padding: 18px 0 18px 60px;
  font-size: 24px;
  color: #e47272;
  &:focus {
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
  }
`;

export const SingleTaskStyles = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #e6e6e6;
  padding: 16px 0;
  font-size: 24px;
  &:last-child {
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
  }
  button {
    margin-left: auto;
  }
  .task-is-done {
    text-decoration: line-through;
    color: #d9d9d9;
  }
  input[type='checkbox'] {
    margin: auto 15px;
  }
`;

export const DeleteTaskStyles = styled.button`
  float: right;
  font-size: 30px;
  background-color: #fff;
  color: #fff;
  margin: 5px;
  transition: color 1s ease-out;
  &:after {
    content: '×';
  }
  &.delete {
    color: #af5b5e;
    cursor: pointer;
  }
`;
