interface currencyListStateI {
  name: string;
  fullName: string;
  price: string;
}

interface rootStateI {
  timestamp: string;
  exchangerAmount: number;
  exchangedAmount: number;
  exchangerCurrency: string;
  exchangedCurrency: string;
  currenciesList: Array<currencyListStateI>;
}

interface rootActionI {
  type: string;
  payload?: any;
}

export { rootActionI, rootStateI, currencyListStateI };
