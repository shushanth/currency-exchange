import styled from 'styled-components';
import colors from '../shared/styles-utils/colorPallets';

const { blueScale } = colors;

const CurrencyExchangeContainerStyled = styled.div`
  border: 1px solid ${blueScale.lowOcean};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 400px;
  margin: 40px auto;
  overflow: hidden;
  width: 400px;
`;

const CurrencyInfoContainerStyled = styled.div`
  width: 100%;
  height: 120px;
`;

const ExchangeBtnContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const CurrencyExchangerContainerStyled = styled.div``;
const CurrencyExchangedContainerStyled = styled.div``;

export {
  CurrencyExchangedContainerStyled,
  CurrencyExchangerContainerStyled,
  CurrencyExchangeContainerStyled,
  CurrencyInfoContainerStyled,
  ExchangeBtnContainerStyled,
};
