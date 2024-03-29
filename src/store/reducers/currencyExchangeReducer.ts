import {
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_RATES,
  CHANGE_EXCHANGER_RATES,
  CHANGE_EXCHANGED_RATES,
  CHANGE_EXCHANGER_CURRENCY,
  CHANGE_EXCHANGED_CURRENCY,
  SWAP_CURRENCIES,
} from '../actions/actionTypes';
import { reducerHelpers } from './helpers';

import {
  rootState,
  rootAction,
  currencyListState,
} from './currencyExchangeReducer.model';

const rootInitialState: rootState = {
  exchangerCurrency: 'EUR',
  exchangedCurrency: 'USD',
  exchangerAmount: 0,
  exchangedAmount: 0,
  exchangedRealRate: '',
  currenciesList: [],
};

const {
  mapCurrenciesWithPrice,
  getRealCurrencyPrice,
  initiateCurrencies,
  getExchangerPriceWithFormat,
  getExchangedPriceWithFormat,
} = reducerHelpers;

const currencyExchangeReducer = (
  state = rootInitialState,
  { type, payload }: rootAction,
): rootState => {
  switch (type) {
    case FETCH_CURRENCIES:
      let updatedCurrencies: Array<currencyListState> = initiateCurrencies(
        payload,
      );
      return {
        ...state,
        currenciesList: updatedCurrencies,
      };

    case FETCH_CURRENCIES_RATES:
      const { rates } = payload;
      const { currenciesList } = state;
      const updatedCurrenciesWithPrices = mapCurrenciesWithPrice(
        currenciesList,
        rates,
      );
      const exchangedUpdatedRealRate = getRealCurrencyPrice(
        updatedCurrenciesWithPrices,
        state.exchangedCurrency,
      );
      return {
        ...state,
        currenciesList: updatedCurrenciesWithPrices,
        exchangedRealRate: exchangedUpdatedRealRate,
      };
    case CHANGE_EXCHANGER_RATES:
      const exchangedUpdatedCurrencyPrice: number = getExchangerPriceWithFormat(
        state.currenciesList,
        state.exchangedCurrency,
        payload.amount,
      );
      return {
        ...state,
        exchangerAmount: payload.amount,
        exchangedAmount: exchangedUpdatedCurrencyPrice,
      };

    case CHANGE_EXCHANGED_RATES:
      const currencyExchangedAmount = getExchangedPriceWithFormat(
        state.currenciesList,
        state.exchangerCurrency,
        state.exchangedCurrency,
        payload.amount,
      );
      return {
        ...state,
        exchangedAmount: payload.amount,
        exchangerAmount: currencyExchangedAmount,
      };

    case CHANGE_EXCHANGER_CURRENCY:
      return {
        ...state,
        exchangerCurrency: payload.updatedCurrency,
      };

    case CHANGE_EXCHANGED_CURRENCY:
      const changedExchangerAmt = state.currenciesList.filter(
        (currency: currencyListState) => {
          return currency.name === payload.updatedCurrency;
        },
      );
      return {
        ...state,
        exchangedCurrency: payload.updatedCurrency,
        exchangedRealRate: changedExchangerAmt[0].price,
      };
    case SWAP_CURRENCIES:
      const { exchangedCurrency, exchangerCurrency } = state;
      const updatedExchangerCurrency = exchangedCurrency;
      const updatedExchangedCurrency = exchangerCurrency;
      return {
        ...state,
        exchangedCurrency: updatedExchangedCurrency,
        exchangerCurrency: updatedExchangerCurrency,
        exchangedAmount: state.exchangerAmount,
        exchangerAmount: state.exchangedAmount,
      };
    default:
      return rootInitialState;
  }
};
export default currencyExchangeReducer;
