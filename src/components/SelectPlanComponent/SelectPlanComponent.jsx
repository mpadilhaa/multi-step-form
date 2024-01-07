import React from "react";
import "./SelectPlanComponent.css";

import { UseYearOrMonthPlan } from "../../contexts/useYearOrMonthPlanContext";

const planData = [
  { name: "Arcade", value: 9 },
  { name: "Advanced", value: 12 },
  { name: "Pro", value: 15 },
];

const SelectPlanComponent = () => {
  const { changePlan, setPlan, yearOrMonth, plan } = UseYearOrMonthPlan();

  const changeValuePlan = (name, value, mod) => {
    if (yearOrMonth) {
      return setPlan({ name: name, value: value * 10 });
    }

    return setPlan({ name: name, value: value });
  };

  console.log(plan);
  return (
    <div>
      {planData.map((item) => (
        <div
          key={item.name} // Certifique-se de incluir uma chave única para cada elemento na lista
          className="card-plan"
          onClick={() => changeValuePlan(item.name, item.value)}
        >
          <div className="icon">{item.name}</div>
          <h3 className="title">{item.name}</h3>
          {yearOrMonth ? (
            <div>
              <p className="price">$ {item.value * 10}/yr</p>
              <span>2 months free</span>
            </div>
          ) : (
            <p className="price">$ {item.value}/mo</p>
          )}
        </div>
      ))}
      <button onClick={changePlan}>Monthly</button>
    </div>
  );
};

export default SelectPlanComponent;
