import React, { FunctionComponent, memo } from 'react';

import { CEInput, CEDropdownButton } from '../../shared/components';
import { ExchangerPropsI } from './currencyExchanger.model';
import {
  ExchangerContainerStyled,
  ExchangerCurrencyContainerStyled,
  ExchangerAmtContainerStyled,
} from './currencyExchanger.styled';

const CurrencyExchanger: FunctionComponent<ExchangerPropsI> = memo(
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
