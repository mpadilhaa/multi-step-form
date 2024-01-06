import { createContext, useContext, useState } from "react";

export const UseYearOrMonthPlanContext = createContext();

export const UseYearOrMonthPlan = () => {
  return useContext(UseYearOrMonthPlanContext);
};

export const UseYearOrMonthProvider = ({ children }) => {
  const [yearOrMonth, setYearOrMonth] = useState(true);
  const [value, setValue] = useState(0);
  const [selectedValues, setSelectedValues] = useState([]);

  const changePlan = () => {
    setYearOrMonth(!yearOrMonth);
    console.log(yearOrMonth);
  };

  return (
    <UseYearOrMonthPlanContext.Provider
      value={{
        yearOrMonth,
        changePlan,
        setValue,
        value,
        selectedValues,
        setSelectedValues,
      }}
    >
      {children}
    </UseYearOrMonthPlanContext.Provider>
  );
};
