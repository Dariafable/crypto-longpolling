import React from "react";
import { TCurrencyItemProps } from "../../types";
import { formatNumber } from "../../utils/helpers";

import "./CurrencyItemStyles.css";

const CurrencyItem = ({ title, values, minValueCurrency }: TCurrencyItemProps) => {
  console.log(minValueCurrency);
  return (
    <>
      <div>{title}</div>
      {values.map((value, index) => (
        <div
          key={index}
          className={
            typeof value === "number" && formatNumber(value) === minValueCurrency ? "min-value" : ""
          }
        >
          {typeof value === "number" ? formatNumber(value) : ""}
        </div>
      ))}
    </>
  );
};

export default CurrencyItem;
