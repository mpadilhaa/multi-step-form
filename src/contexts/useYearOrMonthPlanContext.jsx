import { createContext, useContext, useState } from "react";

export const UseYearOrMonthPlanContext = createContext();

export const UseYearOrMonthPlan = () => {
  return useContext(UseYearOrMonthPlanContext);
};

export const UseYearOrMonthProvider = ({ children }) => {
  const [yearOrMonth, setYearOrMonth] = useState(false);
  const [plan, setPlan] = useState({});
  const [selectedValues, setSelectedValues] = useState([]);

  const changePlan = () => {
    setYearOrMonth(!yearOrMonth);
    setPlan({});
  };

  return (
    <UseYearOrMonthPlanContext.Provider
      value={{
        yearOrMonth,
        changePlan,
        setPlan,
        plan,
        selectedValues,
        setSelectedValues,
      }}
    >
      {children}
    </UseYearOrMonthPlanContext.Provider>
  );
};
