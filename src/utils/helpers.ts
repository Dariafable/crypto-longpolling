import { TArrayData } from "../types";

export const getMinValue = (data: TArrayData): number => {
  return Number(Math.min(...Object.values(data).flat()).toFixed(2));
};

export const formatNumber = (currencyValue: number): number => {
  return Number(currencyValue.toFixed(2));
};
