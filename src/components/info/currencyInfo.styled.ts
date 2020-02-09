import styled from 'styled-components';

const CurrencyExchangeLineStyled = styled.div`
  height: 100%;
  border-left: 1px dotted #194c7f;
  position: absolute;
  left: 50px;
`;

const CurrencySwapStyled = styled.div`
  position: absolute;
  left: 35px;
  top: 20px;
`;

const CurrencyInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  position: absolute;
  right: 60px;

  .exchanger-info {
    font-size: 15px;
    color: #5c5c5cd6;
    margin: 5px;
    font-weight: bold;
  }

  .exchanged-info {
    color: #194c7f;
    font-size: 25px;
    font-weight: 400;
  }
`;

export { CurrencyExchangeLineStyled, CurrencySwapStyled, CurrencyInfoStyled };
