import { reducerHelpers } from '../helpers';
describe('reducerHelpers', () => {
  let currencyEmptyLists: any;
  let ratesEmpty: any;
  let currencyListMock: any;
  let rates: any;
  beforeAll(() => {
    currencyEmptyLists = [];
    ratesEmpty = {};
    currencyListMock = [
      { name: 'AED', fullName: 'United Arab Emirates Dirham' },
      { name: 'AFN', fullName: 'Afghan Afghani' },
      { name: 'ALL', fullName: 'Afghan Afghani' },
    ];
    rates = {
      AED: 4.021922,
      AFN: 84.095994,
      ALL: 121.891353,
    };
  });
  test('method: mapCurrenciesWithPrice, with empty rates and currencyList it should return empty array', () => {
    let emptyMapCurrencies = reducerHelpers.mapCurrenciesWithPrice(
      currencyEmptyLists,
      ratesEmpty,
    );
    expect(emptyMapCurrencies.length).toBe(0);
  });

  test('method: mapCurrenciesWithPrice, it should return currency with price mapped to the respective name', () => {
    let priceMappedWithList = reducerHelpers.mapCurrenciesWithPrice(
      currencyListMock,
      rates,
    );
    const AEDPriceFormat = rates['AED'].toFixed(2);
    const AFNPriceFormat = rates['AFN'].toFixed(2);
    const ALLPriceFormat = rates['ALL'].toFixed(2);
    expect(priceMappedWithList.length).not.toBe(0);
    expect(priceMappedWithList.length).toBe(currencyListMock.length);
    expect(priceMappedWithList[0].price).toBeDefined();
    expect(priceMappedWithList[1].price).toBeDefined();
    expect(priceMappedWithList[2].price).toBeDefined();
    expect(priceMappedWithList[0].price).toEqual(AEDPriceFormat);
    expect(priceMappedWithList[1].price).toEqual(AFNPriceFormat);
    expect(priceMappedWithList[2].price).toEqual(ALLPriceFormat);
  });

  test('method: initiateCurrencies, should return empty array when rates config object is empty', () => {
    let emptyInitialCurrencies = reducerHelpers.initiateCurrencies(ratesEmpty);
    expect(emptyInitialCurrencies.length).toBe(0);
  });

  test('method: initiateCurrencies, should return list with prices as empty with rates configuration', () => {
    let initialCurrencies = reducerHelpers.initiateCurrencies(rates);
    let ratesKeyLength = Object.keys(rates).length;
    expect(initialCurrencies.length).not.toBe(0);
    expect(initialCurrencies.length).toBe(ratesKeyLength);
    expect(initialCurrencies[0].price).toBe('');
    expect(initialCurrencies[1].price).toBe('');
    expect(initialCurrencies[2].price).toBe('');
  });

  test('method: getExchangerPriceWithFormat, should return 0 when passed currencies list is empty', () => {
    let exchangerPrice = reducerHelpers.getExchangerPriceWithFormat([], '', 0);
    expect(exchangerPrice).toBe(0);
  });

  test('method: getExchangerPriceWithFormat, should return price with proper two decimal digits format', () => {
    let currenciesPricesList = [
      { name: 'AFN', fullName: 'Afghan Afghani', price: '84.095994' },
    ];
    let rate = 2;
    let exchangerPriceWithFormat = reducerHelpers.getExchangerPriceWithFormat(
      currenciesPricesList,
      currenciesPricesList[0].name,
      rate,
    );
    const exchangerCurrPrice = parseFloat(currenciesPricesList[0].price);
    const resultPrice = parseFloat((exchangerCurrPrice * rate).toFixed(2));
    expect(exchangerPriceWithFormat).toEqual(resultPrice);
  });

  test('method: getExchangerPriceWithFormat, should return price with proper two decimal digits format', () => {
    let currenciesPricesList = [
      {
        name: 'AED',
        fullName: 'United Arab Emirates Dirham',
        price: '4.021922',
      },
    ];
    let rate = 5.31;
    let exchangerPriceWithFormat = reducerHelpers.getExchangerPriceWithFormat(
      currenciesPricesList,
      currenciesPricesList[0].name,
      rate,
    );
    const exchangerCurrPrice = parseFloat(currenciesPricesList[0].price);
    const resultPrice = parseFloat((exchangerCurrPrice * rate).toFixed(2));
    expect(exchangerPriceWithFormat).toEqual(resultPrice);
  });

  test('method:getExchangedPriceWithFormat, should return price 0 when passed currencies list is empty', () => {
    let exchangedPrice = reducerHelpers.getExchangedPriceWithFormat(
      [],
      '',
      '',
      0,
    );
    expect(exchangedPrice).toBe(0);
  });

  test('method:getExchangedPriceWithFormat should return price with prop two decimal digits format', () => {
    let currenciesPricesList = [
      {
        name: 'USD',
        fullName: 'United states dollars',
        price: '1.09',
      },
      {
        name: 'EUR',
        fullName: 'Euro',
        price: '1',
      },
    ];
    let exchangedRate = 2;
    let result =
      (parseFloat(currenciesPricesList[1]['price']) * exchangedRate) /
      parseFloat(currenciesPricesList[0].price);
    let priceOfExchangedPriceWithFormat = reducerHelpers.getExchangedPriceWithFormat(
      currenciesPricesList,
      'EUR',
      'USD',
      exchangedRate,
    );
    expect(priceOfExchangedPriceWithFormat).toEqual(
      parseFloat(result.toFixed(2)),
    );
  });
});
