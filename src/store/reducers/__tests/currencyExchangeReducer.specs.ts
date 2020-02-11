import {
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_RATES,
  CHANGE_EXCHANGER_RATES,
  CHANGE_EXCHANGED_RATES,
  CHANGE_EXCHANGER_CURRENCY,
  CHANGE_EXCHANGED_CURRENCY,
  SWAP_CURRENCIES,
} from '../../actions/actionTypes';
import currencyExchangeReducer from '../currencyExchangeReducer';

describe('actions', () => {
  let initialStateMock: any;
  let stateIncludingCurrenciesList: any;
  let payloadRatesMock: any;
  let payloadCurrenciesNameMock: any;
  let stateWithCurrenciesPrices: any;
  //   let initialStateMockWithCurrencies: any;
  //   let currenciesListMock: any;
  //   let initalState: any;
  beforeEach(() => {
    initialStateMock = {
      exchangerCurrency: 'EUR',
      exchangedCurrency: 'USD',
      exchangerAmount: 0,
      exchangedAmount: 0,
      exchangedRealRate: '',
      currenciesList: [],
    };
    stateWithCurrenciesPrices = {
      exchangerCurrency: 'EUR',
      exchangedCurrency: 'USD',
      exchangerAmount: 0,
      exchangedAmount: 0,
      exchangedRealRate: '',
      currenciesList: [
        {
          name: 'AFD',
          fullName: 'United Arab Emirates Dirham',
          price: 4.008189,
        },
        {
          name: 'AFN',
          fullName: 'Afghan Afghani',
          price: 84.188237,
        },
        {
          name: 'EUR',
          fullName: 'Euro',
          price: 1.0,
        },
        {
          name: 'USD',
          fullName: 'United States Dollar',
          price: 1.09024,
        },
      ],
    };
    stateIncludingCurrenciesList = {
      ...initialStateMock,
      currenciesList: [
        {
          name: 'AFD',
          fullName: 'United Arab Emirates Dirham',
          price: '',
        },
        {
          name: 'AFN',
          fullName: 'Afghan Afghani',
          price: '',
        },
        {
          name: 'EUR',
          fullName: 'Euro',
          price: '',
        },
        {
          name: 'USD',
          fullName: 'United States Dollar',
          price: '',
        },
      ],
    };
    payloadCurrenciesNameMock = {
      AFD: 'United Arab Emirates Dirham',
      AFN: 'Afghan Afghani',
      EUR: 'Euro',
      USD: 'United States Dollar',
    };
    payloadRatesMock = {
      rates: {
        AFD: 4.008189,
        AFN: 84.188237,
        EUR: 1.0,
        USD: 1.09024,
      },
    };
  });

  describe('action type: undefined or empty', () => {
    test('it should return default state on empty action type', () => {
      const reducerResult = currencyExchangeReducer(undefined, { type: '' });
      const expectedResult = initialStateMock;
      expect(reducerResult).toEqual(expectedResult);
    });
  });

  describe('action type: FETCH_CURRENCIES', () => {
    test('action type: FETCH_CURRENCIES it should return currenciesList in the state with name and fullName', () => {
      const reducerResult = currencyExchangeReducer(initialStateMock, {
        type: FETCH_CURRENCIES,
        payload: payloadCurrenciesNameMock,
      });
      expect(reducerResult).toBeDefined();
      expect(Object.keys(reducerResult).length).not.toBe(0);
      expect(reducerResult.currenciesList.length).not.toBe(0);
      expect(reducerResult.currenciesList[0].name).toEqual(
        Object.keys(payloadCurrenciesNameMock)[0],
      );
      expect(reducerResult.currenciesList[1].name).toEqual(
        Object.keys(payloadCurrenciesNameMock)[1],
      );
      expect(reducerResult.currenciesList[2].name).toEqual(
        Object.keys(payloadCurrenciesNameMock)[2],
      );
      expect(reducerResult.currenciesList[3].name).toEqual(
        Object.keys(payloadCurrenciesNameMock)[3],
      );

      expect(reducerResult.currenciesList[0].fullName).toEqual(
        payloadCurrenciesNameMock[Object.keys(payloadCurrenciesNameMock)[0]],
      );
      expect(reducerResult.currenciesList[1].fullName).toEqual(
        payloadCurrenciesNameMock[Object.keys(payloadCurrenciesNameMock)[1]],
      );
      expect(reducerResult.currenciesList[2].fullName).toEqual(
        payloadCurrenciesNameMock[Object.keys(payloadCurrenciesNameMock)[2]],
      );
      expect(reducerResult.currenciesList[3].fullName).toEqual(
        payloadCurrenciesNameMock[Object.keys(payloadCurrenciesNameMock)[3]],
      );
    });
  });

  describe('action type: FETCH_CURRENCIES_RATES', () => {
    test('it should return state with currenciesList with prices included', () => {
      const getPriceWithFormat = (currencyName: string) => {
        return payloadRatesMock.rates[currencyName].toFixed(2);
      };
      const reducerResult = currencyExchangeReducer(
        stateIncludingCurrenciesList,
        {
          type: FETCH_CURRENCIES_RATES,
          payload: payloadRatesMock,
        },
      );
      expect(reducerResult.currenciesList.length).not.toBe(0);
      expect(reducerResult.currenciesList[0].price).toBeDefined();
      expect(reducerResult.currenciesList[1].price).toBeDefined();
      expect(reducerResult.currenciesList[2].price).toBeDefined();
      expect(reducerResult.currenciesList[3].price).toBeDefined();
      expect(reducerResult.currenciesList[0].price).toEqual(
        getPriceWithFormat('AFD'),
      );
      expect(reducerResult.currenciesList[1].price).toEqual(
        getPriceWithFormat('AFN'),
      );
      expect(reducerResult.currenciesList[2].price).toEqual(
        getPriceWithFormat('EUR'),
      );
      expect(reducerResult.currenciesList[3].price).toEqual(
        getPriceWithFormat('USD'),
      );
    });
  });

  describe('action type: CHANGE_EXCHANGER_RATES', () => {
    test('it should return state with the changed exchanger and exchanged price', () => {
      const amount = 2.5;
      const reducerResult = currencyExchangeReducer(stateWithCurrenciesPrices, {
        type: CHANGE_EXCHANGER_RATES,
        payload: { amount },
      });
      const expectedResult = parseFloat(
        (
          amount * payloadRatesMock.rates[reducerResult.exchangedCurrency]
        ).toFixed(2),
      );
      expect(reducerResult.exchangerAmount).toBeDefined();
      expect(reducerResult.exchangedAmount).not.toBe(0);
      expect(reducerResult.exchangedAmount).toEqual(expectedResult);
    });
  });

  describe('action type: CHANGE_EXCHANGED_RATES', () => {
    test('it should return state with the changed exchanger and exchanged price', () => {
      const amount = 1.5;
      const reducerResult = currencyExchangeReducer(stateWithCurrenciesPrices, {
        type: CHANGE_EXCHANGED_RATES,
        payload: { amount },
      });
      const expectedResult =
        (amount * payloadRatesMock.rates[reducerResult.exchangerCurrency]) /
        payloadRatesMock.rates[reducerResult.exchangedCurrency];
      expect(reducerResult.exchangedAmount).toBeDefined();
      expect(reducerResult.exchangerAmount.toString()).toEqual(
        parseFloat(`${expectedResult}`).toFixed(2),
      );
    });
  });

  describe('action type: CHANGE_EXCHANGER_CURRENCY', () => {
    test('it should return state with exchanger currency with the new exchanger currency ', () => {
      const reducerResult = currencyExchangeReducer(stateWithCurrenciesPrices, {
        type: CHANGE_EXCHANGER_CURRENCY,
        payload: { updatedCurrency: 'USD' },
      });
      expect(reducerResult.exchangerCurrency).toBeDefined();
      expect(reducerResult.exchangerCurrency).toEqual('USD');
    });
  });

  describe('action type: CHANGE_EXCHANGED_CURRENCY', () => {
    test('it should return state with exchanged currency with the new exchanged currency and exchanged real rate', () => {
      const changedCurrency = 'AFN';
      const reducerResult = currencyExchangeReducer(stateWithCurrenciesPrices, {
        type: CHANGE_EXCHANGED_CURRENCY,
        payload: { updatedCurrency: changedCurrency },
      });
      expect(reducerResult.exchangerCurrency).toBeDefined();
      expect(reducerResult.exchangedCurrency).toEqual(changedCurrency);
      expect(reducerResult.exchangedRealRate).toBeDefined();
      expect(reducerResult.exchangedRealRate).toEqual(
        payloadRatesMock.rates[changedCurrency],
      );
    });
  });

  describe('action type: SWAP_CURRENCIES', () => {
    test('it should return state with swapped exchanger and exchangd currencies', () => {
      const reducerResult = currencyExchangeReducer(stateWithCurrenciesPrices, {
        type: SWAP_CURRENCIES,
      });
      expect(reducerResult.exchangerCurrency).toEqual(
        stateWithCurrenciesPrices.exchangedCurrency,
      );
      expect(reducerResult.exchangedCurrency).toEqual(
        stateWithCurrenciesPrices.exchangerCurrency,
      );
    });
  });
});
