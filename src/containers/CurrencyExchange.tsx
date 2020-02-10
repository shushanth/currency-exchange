import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { apiService } from '../utils/apiUtils';
import { rootState } from '../store/reducers';
import {
  CurrencyExchanger,
  CurrencyExchanged,
  CurrencyInfo,
} from '../components';
import { CEModalList, CEButton } from '../shared/components';
import {
  fetchCurrenciesRates,
  fetchCurrencies,
  changeOfExchangerRates,
  changeOfExchangedRates,
  changeOfExchangerCurrency,
  changeOfExchangedCurrency,
  swapOfCurrency,
} from '../store/actions';
import {
  CurrencyExchangeContainerStyled,
  CurrencyExchangedContainerStyled,
  CurrencyExchangerContainerStyled,
  CurrencyInfoContainerStyled,
  ExchangeBtnContainerStyled,
} from './CurrencyExchange.styled';
import {
  CurrencyExchangeProps,
  currencyExchangeModel,
} from './CurrencyExchange.model';

const CurrencyExchange: FunctionComponent<CurrencyExchangeProps> = (): JSX.Element => {
  const dispatch = useDispatch();

  const currenciesList = useSelector(
    (state: rootState) => state.currenciesList,
  );
  const exchangerCurrency = useSelector(
    (state: rootState) => state.exchangerCurrency,
  );
  const exchangerAmt = useSelector((state: rootState) => state.exchangerAmount);

  const exchangedCurrency = useSelector(
    (state: rootState) => state.exchangedCurrency,
  );

  const exchangedAmt = useSelector((state: rootState) => state.exchangedAmount);

  const exchangedRealRate = useSelector(
    (state: rootState) => state.exchangedRealRate,
  );

  const [displayCurrenciesList, setDisplayCurrenciesList] = useState<boolean>(
    false,
  );
  const [currencySelectMode, setCurrencySelectMode] = useState<
    currencyExchangeModel
  >('EXCHANGER');

  useEffect(() => {
    requestAvailableCurrencies();
  }, []);

  const requestAvailableCurrencies = () => {
    apiService.request({
      url: 'https://openexchangerates.org/api/currencies.json',
      onSuccess: result => {
        const fetchedCurrencies = dispatch(
          fetchCurrencies({ payload: result }),
        );
        fetchedCurrencies.payload &&
          associateCurrenciesWithRates(exchangerCurrency);
      },
      onFailure: error => console.log(error),
    });
  };

  const associateCurrenciesWithRates = (changedCurrency: string) => {
    apiService.request({
      baseCurrency: changedCurrency,
      onSuccess: result => dispatch(fetchCurrenciesRates({ payload: result })),
      onFailure: error => console.log(error),
    });
  };

  const exchangerAmtChange = (exchangerAmt: number) => {
    dispatch(
      changeOfExchangerRates({
        payload: { amount: exchangerAmt },
      }),
    );
  };

  const exchangerCurrencyChange = () => {
    setDisplayCurrenciesList(!displayCurrenciesList);
    setCurrencySelectMode('EXCHANGER');
  };

  const exchangedAmtChange = (exchangedAmt: number) => {
    dispatch(changeOfExchangedRates({ payload: { amount: exchangedAmt } }));
  };

  const exchangedCurrencyChange = () => {
    setCurrencySelectMode('EXCHANGED');
    setDisplayCurrenciesList(!displayCurrenciesList);
  };

  const invokeCurrencyChange = (changedCurrency: string) => {
    setDisplayCurrenciesList(false);
    if (currencySelectMode === 'EXCHANGER') {
      associateCurrenciesWithRates(changedCurrency);
      dispatch(
        changeOfExchangerCurrency({
          payload: { updatedCurrency: changedCurrency },
        }),
      );
    }
    if (currencySelectMode === 'EXCHANGED') {
      dispatch(
        changeOfExchangedCurrency({
          payload: { updatedCurrency: changedCurrency },
        }),
      );
    }
  };

  const onCurrenciesSwap = () => {
    associateCurrenciesWithRates(exchangedCurrency);
    dispatch(swapOfCurrency());
  };

  return (
    <CurrencyExchangeContainerStyled>
      <CEModalList
        name="currencies-list"
        listItems={currenciesList}
        showModal={displayCurrenciesList}
        onClose={() => setDisplayCurrenciesList(false)}
        onItemSelect={invokeCurrencyChange}
      />
      <CurrencyExchangerContainerStyled>
        <CurrencyExchanger
          currenciesList={currenciesList}
          exchangerCurrency={exchangerCurrency}
          exchangerAmount={exchangerAmt}
          onExchangerAmountChange={exchangerAmtChange}
          onExchangerCurrencyChange={exchangerCurrencyChange}
        />
      </CurrencyExchangerContainerStyled>

      <CurrencyInfoContainerStyled>
        <CurrencyInfo
          exchangerCurrency={exchangerCurrency}
          exchangedCurrency={exchangedCurrency}
          exchangedRate={exchangedRealRate}
          onCurrencySwap={onCurrenciesSwap}
        />
      </CurrencyInfoContainerStyled>

      <CurrencyExchangedContainerStyled>
        <CurrencyExchanged
          currenciesList={currenciesList}
          exchangedCurrency={exchangedCurrency}
          exchangedAmount={exchangedAmt}
          onExchangedAmountChange={exchangedAmtChange}
          onExchangedCurrencyChange={exchangedCurrencyChange}
        />
      </CurrencyExchangedContainerStyled>
      <ExchangeBtnContainerStyled>
        <CEButton label="Exchange" level="primary" />
      </ExchangeBtnContainerStyled>
    </CurrencyExchangeContainerStyled>
  );
};

export default CurrencyExchange;
