import React, { useState } from "react";
import "./AddOnsComponent.css";

import { UseYearOrMonthPlan } from "../../contexts/useYearOrMonthPlanContext";

const pickAddOns = [
  {
    id: 0,
    title: "Online service",
    description: "Access to multiplayer games",
    value: 1,
    checked: false,
  },
  {
    id: 1,
    title: "Large Storage",
    description: "Extra 1TB of cloud save",
    value: 2,
    checked: false,
  },
  {
    id: 2,
    title: "Customizable profile",
    description: "Custom theme on your profile",
    value: 2,
    checked: false,
  },
];

const AddOnsComponent = () => {
  const { selectedValues, setSelectedValues } = UseYearOrMonthPlan();

  const handleCheckboxChange = (id, title, value, checked) => {
    setSelectedValues((prevValues) => {
      const isDuplicateId = prevValues.some((item) => item.id === id);

      if (isDuplicateId) {
        const updatedValues = prevValues.filter((item) => item.id !== id);
        return updatedValues;
      }

      return [...prevValues, { id, title, value, checked }];
    });
  };
  console.log(selectedValues);
  return (
    <div className="add-ons">
      {pickAddOns?.map((item) => (
        <div
          className="card-add-ons"
          key={item.name}
          onClick={() =>
            handleCheckboxChange(
              item.id,
              item.title,
              item.value,
              (item.checked = !item.checked)
            )
          }
        >
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AddOnsComponent;
