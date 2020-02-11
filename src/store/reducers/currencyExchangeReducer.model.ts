interface currencyListState {
  name: string;
  fullName: string;
  price: string;
}

interface rootState {
  exchangerAmount: number;
  exchangedAmount: number;
  exchangedRealRate: string;
  exchangerCurrency: string;
  exchangedCurrency: string;
  currenciesList: Array<currencyListState>;
}

interface rootAction {
  type: string;
  payload?: any;
}

export { rootAction, rootState, currencyListState };
