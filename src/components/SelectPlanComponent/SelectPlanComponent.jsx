import React from "react";
import "./SelectPlanComponent.css";
import { useState } from "react";

import { UseYearOrMonthPlan } from "../../contexts/useYearOrMonthPlanContext";

const SelectPlanComponent = () => {
  const { yearOrMonth, changePlan, valueofTheChosenPlant, setValue } =
    UseYearOrMonthPlan();

  const changeValuePlan = (value) => {
    setValue(value);
  };

  return (
    <div>
      <div className="card-plan" onClick={() => changeValuePlan(19)}>
        <div className="icon"></div>
        <h3 className="title">Hello</h3>
        <p className="price"></p>
      </div>
      <button onClick={changePlan}></button>
    </div>
  );
};

export default SelectPlanComponent;
