import styled from 'styled-components';

const AddTaskStyles = styled.div`
  display: flex;
  input[type='text'] {
    padding: 16px 0;
    font-size: 24px;
    margin: 20px 0;
    width: 95%;
    &::placeholder {
      opacity: 0.2;
    }
  }
  input[type='checkbox'] {
    margin: auto 15px;
  }
`;

export default AddTaskStyles;
