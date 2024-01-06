import React from "react";
import { UseYearOrMonthPlan } from "../../contexts/useYearOrMonthPlanContext";

const FinishingUpComponent = () => {
  const { value, selectedValues } = UseYearOrMonthPlan();

  const reduceValue = selectedValues.reduce(
    (acc, currentValue) => acc + currentValue,
    value
  );

  return <div>{reduceValue}</div>;
};

export default FinishingUpComponent;
