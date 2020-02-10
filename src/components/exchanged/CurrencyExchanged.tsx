import React, { FunctionComponent, memo } from 'react';

import { CEInput, CEDropdownButton } from '../../shared/components';
import { ExchangedProps } from './CurrencyExchanged.model';
import {
  ExchangedContainerStyled,
  ExchangedCurrencyContainerStyled,
  ExchangedAmtContainerStyled,
} from './CurrencyExchanged.styled';

const CurrencyExchanged: FunctionComponent<ExchangedProps> = memo(
  ({
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
  },
);

export default CurrencyExchanged;
