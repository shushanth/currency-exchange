import styled from 'styled-components';

const DropdownBtnContainerStyled = styled.button`
  border: 1px solid #194c7f;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #194c7f;
  color: snow;
  cursor: pointer;
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
