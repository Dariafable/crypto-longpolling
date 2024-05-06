import React from "react";
import CurrencyItem from "../CurrencyItem/CurrencyItem";

import { TCurrenciesContentProps } from "../../types";
import { LIST_HEAD } from "../../constants";

import "./CurrenciesStyles.css";

const Currencies = ({ minValueCurrency, currencies }: TCurrenciesContentProps) => {
  return (
    <div className="list">
      {LIST_HEAD.map((item) => (
        <h3 key={item}>{item}</h3>
      ))}

      {currencies.map(([title, values], index) => (
        <CurrencyItem
          key={index}
          title={title}
          values={values}
          minValueCurrency={minValueCurrency}
        />
      ))}
    </div>
  );
};

export default Currencies;
