import React from "react";
import CurrencyItem from "../CurrencyItem/CurrencyItem";

import "./CurrenciesStyles.css";

const Currencies = () => {
  return (
    <table className="table">
      <thead>
        <tr className="table-head">
          <th className="table-headData">Pair name/market</th>
          <th className="table-headData">First</th>
          <th className="table-headData">Second</th>
          <th className="table-headData">Third</th>
        </tr>
      </thead>
      <CurrencyItem />
    </table>
  );
};

export default Currencies;
