import styled from 'styled-components';

const InputContainerStyled = styled.div`
  display: flex;
  height: 100%;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }
`;

const InputElementStyled = styled.input`
  width: 100;
  font-size: 25px;
  border: 1px solid gray;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 15px 5px;
  color: #194c7f;
  border-color: #194c7f;
  &:focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #194c7f;
  }
  :ms-input-placeholder {
    color: #194c7f;
  }
  ::placeholder {
    color: #194c7f;
  }
`;

export { InputContainerStyled, InputElementStyled };
