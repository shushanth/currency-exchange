import React, { FunctionComponent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { apiService } from '../utils/apiUtils';
import { rootStateI } from '../store/reducers';
import { CurrencyExchanger, CurrencyExchanged } from '../components';
import { CEModalList } from '../shared/components';
import {
  fetchCurrenciesRates,
  fetchCurrencies,
  changeOfExchangerRates,
  changeOfExchangedRates,
  changeOfExchangerCurrency,
  changeOfExchangedCurrency,
} from '../store/actions';
import {
  CurrencyExchangeContainerStyled,
  CurrencyExchangedContainerStyled,
  CurrencyExchangerContainerStyled,
  CurrencyConvertContainerStyled,
} from './currencyExchange.styled';
import { CurrencyExchangePropsI } from './currencyExchange.model';

type currencyExchangeModelI = 'EXCHANGER' | 'EXCHANGED';

const CurrencyExchange: FunctionComponent<CurrencyExchangePropsI> = (): JSX.Element => {
  const dispatch = useDispatch();

  const currenciesList = useSelector(
    (state: rootStateI) => state.currenciesList,
  );
  const exchangerCurrency = useSelector(
    (state: rootStateI) => state.exchangerCurrency,
  );
  const exchangerAmt = useSelector(
    (state: rootStateI) => state.exchangerAmount,
  );

  const exchangedCurrency = useSelector(
    (state: rootStateI) => state.exchangedCurrency,
  );

  const exchangedAmt = useSelector(
    (state: rootStateI) => state.exchangedAmount,
  );

  const [displayCurrenciesList, setDisplayCurrenciesList] = useState<boolean>(
    false,
  );
  const [currencySelectMode, setCurrencySelectMode] = useState<
    currencyExchangeModelI
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
        fetchedCurrencies.payload && associateCurrenciesWithRates();
      },
      onFailure: error => console.log(error),
    });
  };

  const associateCurrenciesWithRates = () => {
    apiService.request({
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

      <CurrencyExchangedContainerStyled>
        <CurrencyExchanged
          currenciesList={currenciesList}
          exchangedCurrency={exchangedCurrency}
          exchangedAmount={exchangedAmt}
          onExchangedAmountChange={exchangedAmtChange}
          onExchangedCurrencyChange={exchangedCurrencyChange}
        />
      </CurrencyExchangedContainerStyled>
      <CurrencyConvertContainerStyled>
        <button>Exchange</button>
      </CurrencyConvertContainerStyled>
    </CurrencyExchangeContainerStyled>
  );
};

export default CurrencyExchange;
