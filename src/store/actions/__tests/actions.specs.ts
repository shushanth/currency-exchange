import {
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_RATES,
  CHANGE_EXCHANGER_RATES,
  CHANGE_EXCHANGED_RATES,
  CHANGE_EXCHANGER_CURRENCY,
  CHANGE_EXCHANGED_CURRENCY,
  SWAP_CURRENCIES,
} from '../actionTypes';
import {
  fetchCurrencies,
  fetchCurrenciesRates,
  changeOfExchangerRates,
  changeOfExchangedRates,
  changeOfExchangerCurrency,
  changeOfExchangedCurrency,
  swapOfCurrency,
} from '../actions';

describe('actions', () => {
  describe('action: fetchCurrencies', () => {
    test('it should return the expected action', () => {
      const expectedAction = { type: FETCH_CURRENCIES, payload: {} };
      const resultAction = fetchCurrencies({ payload: {} });
      expect(resultAction).toBeDefined();
      expect(resultAction).toEqual(expectedAction);
    });
  });

  describe('action: fetchCurrenciesRates', () => {
    test('it should return the expected action', () => {
      const expectedAction = { type: FETCH_CURRENCIES_RATES, payload: {} };
      const resultAction = fetchCurrenciesRates({ payload: {} });
      expect(resultAction).toBeDefined();
      expect(resultAction).toEqual(expectedAction);
    });
  });

  describe('action: changeOfExchangerRates', () => {
    test('it should return the expected action', () => {
      const expectedAction = {
        type: CHANGE_EXCHANGER_RATES,
        payload: { amount: 20 },
      };
      const resultAction = changeOfExchangerRates({ payload: { amount: 20 } });
      expect(resultAction).toBeDefined();
      expect(resultAction).toEqual(expectedAction);
    });
  });

  describe('action: changeOfExchangedRates', () => {
    test('it should return the expected action', () => {
      const expectedAction = {
        type: CHANGE_EXCHANGED_RATES,
        payload: { amount: 20 },
      };
      const resultAction = changeOfExchangedRates({ payload: { amount: 20 } });
      expect(resultAction).toBeDefined();
      expect(resultAction).toEqual(expectedAction);
    });
  });

  describe('action: changeOfExchangerCurrency', () => {
    test('it should return the expected action', () => {
      const expectedAction = {
        type: CHANGE_EXCHANGER_CURRENCY,
        payload: { updatedCurrency: 'EUR' },
      };
      const resultAction = changeOfExchangerCurrency({
        payload: { updatedCurrency: 'EUR' },
      });
      expect(resultAction).toBeDefined();
      expect(resultAction).toEqual(expectedAction);
    });
  });

  describe('action: changeOfExchangedCurrency', () => {
    test('it should return the expected action', () => {
      const expectedAction = {
        type: CHANGE_EXCHANGED_CURRENCY,
        payload: { updatedCurrency: 'USD' },
      };
      const resultAction = changeOfExchangedCurrency({
        payload: { updatedCurrency: 'USD' },
      });
      expect(resultAction).toBeDefined();
      expect(resultAction).toEqual(expectedAction);
    });
  });

  describe('action: swapOfCurrency', () => {
    test('it should return the expected action', () => {
      const expectedAction = {
        type: SWAP_CURRENCIES,
      };
      const resultAction = swapOfCurrency();
      expect(resultAction).toBeDefined();
      expect(resultAction).toEqual(expectedAction);
    });
  });
});
