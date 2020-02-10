import { isArrayEmpty } from '../../utils';
import { currencyListStateI } from './currencyExchangeReducer.model';

const mapCurrenciesWithPrice = (
  currencyLists: currencyListStateI[],
  rates: { [key: string]: string },
): currencyListStateI[] => {
  if (isArrayEmpty(currencyLists)) {
    return [];
  }
  const priceCurrencyLists = currencyLists.map(
    (currency: currencyListStateI) => {
      const rate = Number(rates[currency.name]).toFixed(2);
      currency.price = rate;
      return currency;
    },
  );
  return priceCurrencyLists;
};

const initiateCurrencies = (currencyConfig: { [key: string]: string }) => {
  let updatedCurrenciesLists: currencyListStateI[] = [];
  const currencyConfigKeys = Object.keys(currencyConfig);
  currencyConfigKeys.map((currencyKey: string) =>
    updatedCurrenciesLists.push({
      name: currencyKey,
      fullName: currencyConfig[currencyKey],
      price: '',
    }),
  );
  return updatedCurrenciesLists;
};

const getRealCurrencyPrice = (
  currencyList: currencyListStateI[],
  currencyRequired: string,
): string | any => {
  if (isArrayEmpty(currencyList)) {
    return '';
  }
  const currencyPriceInList = currencyList.filter(
    (currency: currencyListStateI) => {
      return currency.name === currencyRequired;
    },
  );
  return currencyPriceInList[0].price;
};

const getExchangerPriceWithFormat = (
  currencyList: currencyListStateI[],
  currencyRequired: string,
  exchangerAmt: number,
): number => {
  if (isArrayEmpty(currencyList)) {
    return 0;
  }
  const currencyExchangedPrice = getRealCurrencyPrice(
    currencyList,
    currencyRequired,
  );
  const priceWithExchanger = parseFloat(
    (exchangerAmt * currencyExchangedPrice).toFixed(2),
  );
  return priceWithExchanger;
};

const getExchangedPriceWithFormat = (
  currencyList: currencyListStateI[],
  exchangerCurrency: string,
  exchangedCurrency: string,
  exchangedAmt: number,
): number => {
  if (isArrayEmpty(currencyList)) {
    return 0;
  }
  const exchangerCurrencyRate: any = currencyList.filter(
    (currency: currencyListStateI) => currency.name === exchangerCurrency,
  )[0];
  const exchangedCurrencyPrice: any = currencyList.filter(
    (currency: currencyListStateI) => currency.name === exchangedCurrency,
  )[0];
  const updatedCurrencyExchangerRate =
    (exchangerCurrencyRate.price * exchangedAmt) / exchangedCurrencyPrice.price;
  const currencyExchangedAmount = parseFloat(
    updatedCurrencyExchangerRate.toFixed(2),
  );
  return currencyExchangedAmount;
};

const reducerHelpers = {
  initiateCurrencies,
  mapCurrenciesWithPrice,
  getRealCurrencyPrice,
  getExchangerPriceWithFormat,
  getExchangedPriceWithFormat,
};

export { reducerHelpers };
