import {
  FETCH_CURRENCIES_RATES,
  FETCH_CURRENCIES,
  CHANGE_EXCHANGER_RATES,
  CHANGE_EXCHANGED_RATES,
  CHANGE_EXCHANGER_CURRENCY,
  CHANGE_EXCHANGED_CURRENCY,
  SWAP_CURRENCIES,
} from './actionTypes';

export const fetchCurrencies = ({ payload }) => ({
  type: FETCH_CURRENCIES,
  payload,
});

export const fetchCurrenciesRates = ({ payload }) => ({
  type: FETCH_CURRENCIES_RATES,
  payload,
});

export const changeOfExchangerRates = ({ payload }) => ({
  type: CHANGE_EXCHANGER_RATES,
  payload,
});

export const changeOfExchangedRates = ({ payload }) => ({
  type: CHANGE_EXCHANGED_RATES,
  payload,
});

export const changeOfExchangerCurrency = ({ payload }) => ({
  type: CHANGE_EXCHANGER_CURRENCY,
  payload,
});

export const changeOfExchangedCurrency = ({ payload }) => ({
  type: CHANGE_EXCHANGED_CURRENCY,
  payload,
});

export const swapOfCurrency = () => ({
  type: SWAP_CURRENCIES,
});
