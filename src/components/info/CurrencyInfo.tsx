import React, { Fragment, FunctionComponent } from 'react';

import { CESwapButton } from '../../shared/components';
import {
  CurrencyExchangeLineStyled,
  CurrencySwapStyled,
  CurrencyInfoStyled,
} from './currencyInfo.styled';
import { CurrencyInfoI } from './currencyInfo.model';

const CurrencyInfo: FunctionComponent<CurrencyInfoI> = ({
  onCurrencySwap,
  exchangerCurrency,
  exchangedCurrency,
  exchangedRate,
}): JSX.Element => {
  return (
    <Fragment>
      <CurrencyExchangeLineStyled></CurrencyExchangeLineStyled>
      <CurrencySwapStyled>
        <CESwapButton
          onSwapInvoke={swapState => onCurrencySwap(swapState)}
        ></CESwapButton>
      </CurrencySwapStyled>
      {exchangedRate && (
        <CurrencyInfoStyled>
          <div className="exchanger-info">{`1 ${exchangerCurrency} equals`}</div>
          <div className="exchanged-info">{`${exchangedRate} ${exchangedCurrency}`}</div>
        </CurrencyInfoStyled>
      )}
    </Fragment>
  );
};

export default CurrencyInfo;
