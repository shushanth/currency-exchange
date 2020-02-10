import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModelListContainerStyled = styled.div`
  width: 90%;
  height: 100%;
  position: absolute;
  z-index: 999;
  background: #194c7ff0;
  padding: 20px;
  margin: 20px;
  animation: 1s ${fadeIn};
`;

const ModalListItemsContainerStyled = styled.div`
  margin: 15px 0;
  height: 90%;
  overflow-y: scroll;
`;
const ModelListItemStyled = styled.p`
  color: #fff;
  padding: 10px;
  font-size: 15px;
  letter-spacing: 0.1em;
  cursor: pointer;

  &:hover {
    background: #fffafa6e;
  }

  .sub-label {
    padding-left: 5px;
    font-size: 13px;
  }
`;

const ModalCloseStyled = styled.a`
  display: block;
  position: absolute;
  right: 20px;
  color: navajowhite;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 2;
  letter-spacing: 0.1em;
  top: 10px;
  border-bottom: 1px dashed;
  font-size: 15px;
  padding-bottom: 3px;
`;

export {
  ModelListContainerStyled,
  ModelListItemStyled,
  ModalCloseStyled,
  ModalListItemsContainerStyled,
};
