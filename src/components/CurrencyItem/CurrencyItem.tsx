import React from "react";

import { TCurrencyItemProps } from "../../types";
import { formatNumber } from "../../utils/helpers";

import "./CurrencyItemStyles.css";

const CurrencyItem = ({ title, values, minValueCurrency }: TCurrencyItemProps) => {
  return (
    <>
      <div className="currency-item">{title}</div>
      {values.map((value, index) => (
        <div
          key={index}
          className={
            value && formatNumber(value) === minValueCurrency
              ? "currency-item min-value"
              : "currency-item"
          }
        >
          {value ? formatNumber(value) : ""}
        </div>
      ))}
    </>
  );
};

export default CurrencyItem;
