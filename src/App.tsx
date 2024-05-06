import React from "react";

import { Currencies } from "./components";

import { useLongpolling } from "./customHooks";
import { FIRST_ENDPOINT, SECOND_ENDPOINT, THIRD_ENDPOINT } from "./constants";
import { TCurrenciesData, TArrayData } from "./types";
import { getMinValue } from "./utils/helpers";

const getCurrenciesData = (
  firstPoint: TCurrenciesData,
  secondPoint: TCurrenciesData,
  thirdPoint: TCurrenciesData
): TArrayData => {
  return {
    "RUB/CUPCAKE": [firstPoint.RUB, secondPoint.RUB, thirdPoint.RUB],
    "USD/CUPCAKE": [firstPoint.USD, secondPoint.USD, thirdPoint.USD],
    "EUR/CUPCAKE": [firstPoint.EUR, secondPoint.EUR, thirdPoint.EUR],
    "RUB/USD": [
      firstPoint.RUB / firstPoint.USD,
      secondPoint.RUB / secondPoint.USD,
      thirdPoint.RUB / thirdPoint.USD,
    ],
    "RUB/EUR": [
      firstPoint.RUB / firstPoint.EUR,
      secondPoint.RUB / secondPoint.EUR,
      thirdPoint.RUB / thirdPoint.EUR,
    ],
    "EUR/USD": [
      firstPoint.USD / firstPoint.EUR,
      secondPoint.USD / secondPoint.EUR,
      thirdPoint.USD / thirdPoint.EUR,
    ],
  };
};

const App = () => {
  const firstPoint = useLongpolling(FIRST_ENDPOINT);
  const secondPoint = useLongpolling(SECOND_ENDPOINT);
  const thirdPoint = useLongpolling(THIRD_ENDPOINT);

  const currenciesFullData = getCurrenciesData(firstPoint, secondPoint, thirdPoint);
  const currenciesFixedData = Object.entries(currenciesFullData);
  const minValueCurrency = getMinValue(currenciesFullData);

  if (
    Object.keys(firstPoint).length === 0 ||
    Object.keys(secondPoint).length === 0 ||
    Object.keys(thirdPoint).length === 0
  ) {
    return <div>Waiting for data... Keep calm and take a coffee</div>;
  }

  return (
    <>
      <Currencies minValueCurrency={minValueCurrency} currencies={currenciesFixedData} />
    </>
  );
};

export default App;
