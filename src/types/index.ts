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

export type TContentProps = {
  currencies: Array<[string, [number, number, number]]>;
  minValueCurrency: number;
};
