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
            typeof value === "number" && formatNumber(value) === minValueCurrency
              ? "currency-item min-value"
              : "currency-item"
          }
        >
          {typeof value === "number" ? formatNumber(value) : ""}
        </div>
      ))}
    </>
  );
};

export default CurrencyItem;
