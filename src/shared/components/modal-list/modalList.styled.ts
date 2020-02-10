import styled, { keyframes } from 'styled-components';
import colors from '../../styles-utils/colorPallets';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModelListContainerStyled = styled.div`
  animation: 1s ${fadeIn};
  background: ${colors.blueScale.lowOcean};
  height: 100%;
  margin: 20px;
  padding: 20px;
  position: absolute;
  width: 90%;
  z-index: 999;
`;

const ModalListItemsContainerStyled = styled.div`
  height: 90%;
  margin: 20px 0;
  overflow-y: scroll;
`;
const ModelListItemStyled = styled.p`
  color: ${colors.white};
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 0.1em;
  padding: 10px;

  &:hover {
    background: ${colors.grayScale.lightest};
  }

  .sub-label {
    font-size: 13px;
    padding-left: 5px;
  }
`;

const ModalCloseStyled = styled.a`
  background: none;
  border: none;
  border-bottom: 1px dashed;
  color: navajowhite;
  cursor: pointer;
  display: block;
  font-size: 15px;
  letter-spacing: 0.1em;
  padding-bottom: 3px;
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 2;
`;

export {
  ModelListContainerStyled,
  ModelListItemStyled,
  ModalCloseStyled,
  ModalListItemsContainerStyled,
};
