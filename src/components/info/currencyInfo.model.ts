interface CurrencyInfoI {
  onCurrencySwap: (swapState: boolean) => void;
  exchangerCurrency: string | any;
  exchangedCurrency: string | any;
  exchangedRate: string;
}

export { CurrencyInfoI };
