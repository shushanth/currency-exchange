import {
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_RATES,
  CHANGE_EXCHANGER_RATES,
  CHANGE_EXCHANGED_RATES,
  CHANGE_EXCHANGER_CURRENCY,
  CHANGE_EXCHANGED_CURRENCY,
} from '../actions/actionTypes';
import { isArrayEmpty } from '../../src/utils';

import {
  rootStateI,
  rootActionI,
  currencyListStateI,
} from './currencyExchangeReducer.model';

const rootInitialState: rootStateI = {
  timestamp: '',
  exchangerCurrency: 'EUR',
  exchangerAmount: 0,
  exchangedAmount: 0,
  exchangedCurrency: 'USD',
  currenciesList: [],
};

const currencyExchangeReducer = (
  state = rootInitialState,
  { type, payload }: rootActionI,
): rootStateI => {
  switch (type) {
    case FETCH_CURRENCIES_RATES:
      const { timestamp, rates } = payload;
      const { currenciesList } = state;
      const updatedCurrenciesWithPrices: any =
        !isArrayEmpty(currenciesList) &&
        currenciesList.map((currency: currencyListStateI) => {
          const rate = Number(rates[currency.name]).toFixed(2);
          currency.price = rate;
          return currency;
        });
      return {
        ...state,
        timestamp,
        currenciesList: updatedCurrenciesWithPrices,
      };

    case FETCH_CURRENCIES:
      let updatedCurrencies: Array<currencyListStateI> = [];
      Object.keys(payload).map((currencyKey: string) => {
        updatedCurrencies.push({
          name: currencyKey,
          fullName: payload[currencyKey],
          price: '',
        });
      });
      return {
        ...state,
        currenciesList: updatedCurrencies,
      };
    case CHANGE_EXCHANGER_RATES:
      const exchangedCurrencyRate: any = state.currenciesList.filter(
        (currency: currencyListStateI) =>
          currency.name === state.exchangedCurrency,
      )[0];

      const updatedCurrencyExchangedRate =
        payload.amount * exchangedCurrencyRate.price;

      return {
        ...state,
        exchangerAmount: payload.amount,
        exchangedAmount: updatedCurrencyExchangedRate,
      };

    case CHANGE_EXCHANGED_RATES:
      const exchangerCurrencyRate: any = state.currenciesList.filter(
        (currency: currencyListStateI) =>
          currency.name === state.exchangerCurrency,
      )[0];
      const exchangedCurrencyPrice: any = state.currenciesList.filter(
        (currency: currencyListStateI) =>
          currency.name === state.exchangedCurrency,
      )[0];
      const updatedCurrencyExchangerRate =
        (exchangerCurrencyRate.price * payload.amount) /
        exchangedCurrencyPrice.price;
      console.log(updatedCurrencyExchangerRate);
      return {
        ...state,
        exchangedAmount: payload.amount,
        exchangerAmount: updatedCurrencyExchangerRate,
      };

    case CHANGE_EXCHANGER_CURRENCY:
      return {
        ...state,
        exchangerCurrency: payload.updatedCurrency,
      };
    case CHANGE_EXCHANGED_CURRENCY:
      return {
        ...state,
        exchangedCurrency: payload.updatedCurrency,
      };
    default:
      return rootInitialState;
  }
};
export default currencyExchangeReducer;
