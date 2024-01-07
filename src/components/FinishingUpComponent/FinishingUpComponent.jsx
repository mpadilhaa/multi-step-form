import React from "react";
import { UseYearOrMonthPlan } from "../../contexts/useYearOrMonthPlanContext";

const FinishingUpComponent = () => {
  const { plan, selectedValues } = UseYearOrMonthPlan();

  const reduceValue = selectedValues.reduce(
    (acc, currentValue) => acc + currentValue.value,
    plan.value
  );

  return <div>{reduceValue}</div>;
};

export default FinishingUpComponent;
