import {
  FETCH_CURRENCIES_RATES,
  FETCH_CURRENCIES,
  CHANGE_EXCHANGER_RATES,
  CHANGE_EXCHANGED_RATES,
  CHANGE_EXCHANGER_CURRENCY,
  CHANGE_EXCHANGED_CURRENCY,
  SWAP_CURRENCIES,
} from './actionTypes';

export const fetchCurrencies = ({ payload }: any) => ({
  type: FETCH_CURRENCIES,
  payload,
});

export const fetchCurrenciesRates = ({ payload }: any) => ({
  type: FETCH_CURRENCIES_RATES,
  payload,
});

export const changeOfExchangerRates = ({ payload }: any) => ({
  type: CHANGE_EXCHANGER_RATES,
  payload,
});

export const changeOfExchangedRates = ({ payload }: any) => ({
  type: CHANGE_EXCHANGED_RATES,
  payload,
});

export const changeOfExchangerCurrency = ({ payload }: any) => ({
  type: CHANGE_EXCHANGER_CURRENCY,
  payload,
});

export const changeOfExchangedCurrency = ({ payload }: any) => ({
  type: CHANGE_EXCHANGED_CURRENCY,
  payload,
});

export const swapOfCurrency = () => ({
  type: SWAP_CURRENCIES,
});
