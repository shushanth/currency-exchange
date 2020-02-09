import {
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_RATES,
  CHANGE_EXCHANGER_RATES,
  CHANGE_EXCHANGED_RATES,
  CHANGE_EXCHANGER_CURRENCY,
  CHANGE_EXCHANGED_CURRENCY,
  SWAP_CURRENCIES,
} from '../actions/actionTypes';
import { isArrayEmpty } from '../../utils';

import {
  rootStateI,
  rootActionI,
  currencyListStateI,
} from './currencyExchangeReducer.model';

const rootInitialState: rootStateI = {
  timestamp: '',
  exchangerCurrency: 'EUR',
  exchangedCurrency: 'USD',
  exchangerAmount: 0,
  exchangedAmount: 0,
  exchangedRealRate: '',
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
      const exchangedUpdatedRealRate = updatedCurrenciesWithPrices.filter(
        (currency: currencyListStateI) => {
          return currency.name === state.exchangedCurrency;
        },
      );
      return {
        ...state,
        timestamp,
        currenciesList: updatedCurrenciesWithPrices,
        exchangedRealRate: exchangedUpdatedRealRate[0].price,
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
    case SWAP_CURRENCIES:
      const { exchangedCurrency, exchangerCurrency } = state;
      const updateExchangerCurrency = exchangedCurrency;
      const updatedExchangedCurrency = exchangerCurrency;
      return {
        ...state,
        exchangedCurrency: updatedExchangedCurrency,
        exchangerCurrency: updateExchangerCurrency,
      };
    default:
      return rootInitialState;
  }
};
export default currencyExchangeReducer;
