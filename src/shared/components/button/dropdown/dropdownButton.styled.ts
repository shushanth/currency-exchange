import styled from 'styled-components';
import colors from '../../../styles-utils/colorPallets';

const { blueScale } = colors;

const DropdownBtnContainerStyled = styled.button`
  align-items: center;
  background-color: ${blueScale.dark};
  border: 1px solid ${blueScale.dark};
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  outline: none;
`;

const DropdownBtnNameStyled = styled.span`
  font-size: 18px;
  letter-spacing: 0.1em;
  padding: 0 5px;
`;

const DropdownBtnArrowStyled = styled.span`
  padding: 0 5px;
`;

export {
  DropdownBtnContainerStyled,
  DropdownBtnNameStyled,
  DropdownBtnArrowStyled,
};
