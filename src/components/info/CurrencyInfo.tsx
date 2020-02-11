import React, { Fragment, FunctionComponent, memo } from 'react';

import { CESwapButton } from '../../shared/components';
import {
  CurrencyExchangeLineStyled,
  CurrencySwapStyled,
  CurrencyInfoStyled,
} from './CurrencyInfo.styled';
import { CurrencyInfoProps } from './CurrencyInfo.model';

const CurrencyInfo: FunctionComponent<CurrencyInfoProps> = memo(
  ({
    onCurrencySwap,
    exchangerCurrency,
    exchangedCurrency,
    exchangedRate,
  }): JSX.Element => {
    return (
      <Fragment>
        <CurrencyExchangeLineStyled></CurrencyExchangeLineStyled>
        <CurrencySwapStyled>
          <CESwapButton onSwapInvoke={() => onCurrencySwap()}></CESwapButton>
        </CurrencySwapStyled>
        {exchangedRate && (
          <CurrencyInfoStyled>
            <div className="exchanger-info">{`1 ${exchangerCurrency} equals`}</div>
            <div className="exchanged-info">{`${exchangedRate} ${exchangedCurrency}`}</div>
          </CurrencyInfoStyled>
        )}
      </Fragment>
    );
  },
);

export default CurrencyInfo;
