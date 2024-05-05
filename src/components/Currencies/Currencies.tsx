import React from "react";
import CurrencyItem from "../CurrencyItem/CurrencyItem";

import { TContentProps } from "../../types";

import "./CurrenciesStyles.css";

const Currencies = ({ minValueCurrency, currencies }: TContentProps) => {
  if (!currencies) {
    return <div>Waiting for data... Keep calm and take a coffee.</div>;
  }

  return (
    <ul className="table">
      <li className="table-head">
        <div className="table-headData">Pair name/market</div>
        <div className="table-headData">First</div>
        <div className="table-headData">Second</div>
        <div className="table-headData">Third</div>
      </li>
      <CurrencyItem />
    </ul>
  );
};

export default Currencies;
