import React from "react";

import { UseYearOrMonthPlan } from "../../contexts/useYearOrMonthPlanContext";

const AddOnsComponent = () => {
  const { selectedValues, setSelectedValues } = UseYearOrMonthPlan();

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const numericValue = Number(value); // ou parseInt(value, 10);

    setSelectedValues((prevValues) => {
      if (checked) {
        // Adiciona o valor ao array se o checkbox foi marcado
        return [...prevValues, numericValue];
      } else {
        // Remove o valor do array se o checkbox foi desmarcado
        return prevValues.filter((v) => v !== numericValue);
      }
    });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="1"
          checked={selectedValues.includes(1)}
          onChange={handleCheckboxChange}
        />
        Opção 1
      </label>

      <label>
        <input
          type="checkbox"
          value="2"
          checked={selectedValues.includes(2)}
          onChange={handleCheckboxChange}
        />
        Opção 2
      </label>

      <label>
        <input
          type="checkbox"
          value="3"
          checked={selectedValues.includes(3)}
          onChange={handleCheckboxChange}
        />
        Opção 3
      </label>
    </div>
  );
};

export default AddOnsComponent;
