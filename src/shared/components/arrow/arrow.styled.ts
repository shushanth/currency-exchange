import styled from 'styled-components';
import colors from '../../styles-utils/colorPallets';

const ArrowContainerStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ArrowMediumDownStyled = styled.div`
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-top: 40px solid ${colors.white};
  height: 0;
  position: absolute;
  width: 0;
  z-index: 1;
`;

const ArrowSmallDownStyled = styled.div`
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid ${colors.white};
  height: 0;
  position: absolute;
  width: 0;
  z-index: 1;
`;

const ArrowSmallUpStyled = styled.div`
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid ${colors.white};
  height: 0;
  position: absolute;
  width: 0;
  z-index: 1;
`;

export {
  ArrowContainerStyled,
  ArrowMediumDownStyled,
  ArrowSmallDownStyled,
  ArrowSmallUpStyled,
};
