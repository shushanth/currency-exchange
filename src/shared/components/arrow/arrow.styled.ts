import styled from 'styled-components';

const ArrowContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowMediumDownStyled = styled.div`
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-top: 40px solid #fff;
  position: absolute;
  z-index: 1;
`;

const ArrowSmallDownStyled = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #fff;
  position: absolute;
  z-index: 1;
`;

const ArrowSmallUpStyled = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #fff;
  position: absolute;
  z-index: 1;
`;

export {
  ArrowContainerStyled,
  ArrowMediumDownStyled,
  ArrowSmallDownStyled,
  ArrowSmallUpStyled,
};
