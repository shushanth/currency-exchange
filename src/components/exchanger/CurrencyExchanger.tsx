import React, { FunctionComponent, memo } from 'react';

import { CEInput, CEDropdownButton } from '../../shared/components';
import { ExchangerProps } from './CurrencyExchanger.model';
import {
  ExchangerContainerStyled,
  ExchangerCurrencyContainerStyled,
  ExchangerAmtContainerStyled,
} from './CurrencyExchanger.styled';

const CurrencyExchanger: FunctionComponent<ExchangerProps> = memo(
  ({
    exchangerCurrency,
    exchangerAmount,
    onExchangerCurrencyChange,
    onExchangerAmountChange,
  }): JSX.Element => {
    return (
      <ExchangerContainerStyled>
        <ExchangerAmtContainerStyled>
          <CEInput
            inputType="number"
            val={exchangerAmount}
            placeholderText={`${exchangerAmount}`}
            onInputChange={onExchangerAmountChange}
          />
        </ExchangerAmtContainerStyled>
        <ExchangerCurrencyContainerStyled>
          <CEDropdownButton
            selectedLabel={exchangerCurrency}
            onClick={onExchangerCurrencyChange}
          />
        </ExchangerCurrencyContainerStyled>
      </ExchangerContainerStyled>
    );
  },
);

export default CurrencyExchanger;
