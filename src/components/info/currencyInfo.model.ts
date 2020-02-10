interface CurrencyInfoProps {
  onCurrencySwap: (swapState: boolean) => void;
  exchangerCurrency: string | any;
  exchangedCurrency: string | any;
  exchangedRate: string;
}

export { CurrencyInfoProps };
