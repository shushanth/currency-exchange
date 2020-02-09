import styled from 'styled-components';

const CurrencyExchangeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  margin: 40px auto;
  border-radius: 5px;
  border: 1px solid #194c7f6b;
  overflow: hidden;
`;

const CurrencyInfoContainerStyled = styled.div`
  width: 100%;
  height: 120px;
`;

// move to seprate component
const CurrencyConvertStyled = styled.div``;
const CurrencyExchangerContainerStyled = styled.div``;
const CurrencyConvertContainerStyled = styled.div``;
const CurrencyExchangedContainerStyled = styled.div``;

export {
  CurrencyExchangedContainerStyled,
  CurrencyExchangerContainerStyled,
  CurrencyConvertStyled,
  CurrencyExchangeContainerStyled,
  CurrencyConvertContainerStyled,
  CurrencyInfoContainerStyled,
};
