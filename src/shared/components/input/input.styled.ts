import styled from 'styled-components';
import colors from '../../styles-utils/colorPallets';

const { blueScale } = colors;

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
  border: 1px solid gray;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-color: ${blueScale.dark};
  color: ${blueScale.dark};
  padding: 15px 5px;
  font-size: 25px;
  width: 100;

  &:focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: ${blueScale.dark};
  }
  :ms-input-placeholder {
    color: ${blueScale.dark};
  }
  ::placeholder {
    color: ${blueScale.dark};
  }
`;

export { InputContainerStyled, InputElementStyled };
