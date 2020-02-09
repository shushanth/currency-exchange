import React, { FunctionComponent } from 'react';

import { CEInput, CEDropdownButton } from '../../shared/components';
import { ExchangedPropsI } from './currencyExchanged.model';
import {
  ExchangedContainerStyled,
  ExchangedCurrencyContainerStyled,
  ExchangedAmtContainerStyled,
} from './currencyExchanged.styled';

const CurrencyExchanged: FunctionComponent<ExchangedPropsI> = ({
  exchangedCurrency,
  exchangedAmount,
  onExchangedCurrencyChange,
  onExchangedAmountChange,
}): JSX.Element => {
  return (
    <ExchangedContainerStyled>
      <ExchangedAmtContainerStyled>
        <CEInput
          inputType="number"
          val={exchangedAmount}
          placeholderText={`${exchangedAmount}`}
          onInputChange={onExchangedAmountChange}
        />
      </ExchangedAmtContainerStyled>
      <ExchangedCurrencyContainerStyled>
        <CEDropdownButton
          selectedLabel={exchangedCurrency}
          onClick={onExchangedCurrencyChange}
        />
      </ExchangedCurrencyContainerStyled>
    </ExchangedContainerStyled>
  );
};

export default CurrencyExchanged;
