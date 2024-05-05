import { TArrayData } from "../types";
export const getMinValue = (data: TArrayData) => {
  return Number(Math.min(...Object.values(data).flat()).toFixed(2));
};
