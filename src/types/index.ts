export type TEndpoint = {
  path: string;
  longpolling: string;
};

export type TCurrenciesData = {
  [key: string]: number;
};
export type TArrayData = {
  [key: string]: [number, number, number];
};

export type TCurrenciesContentProps = {
  currencies: Array<[string, [number, number, number]]>;
  minValueCurrency: number;
};

export type TCurrencyItemProps = {
  title: string;
  values: [number, number, number];
  minValueCurrency: number;
};
