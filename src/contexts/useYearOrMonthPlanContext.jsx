import { createContext, useContext, useState } from "react";

export const UseYearOrMonthPlanContext = createContext();

export const UseYearOrMonthPlan = () => {
  return useContext(UseYearOrMonthPlanContext);
};

export const UseYearOrMonthProvider = ({ children }) => {
  const [yearOrMonth, setYearOrMonth] = useState(true);

  const changePlan = () => {
    setYearOrMonth(!yearOrMonth);
    console.log(yearOrMonth);
  };

  return (
    <UseYearOrMonthPlanContext.Provider value={{ yearOrMonth, changePlan }}>
      {children}
    </UseYearOrMonthPlanContext.Provider>
  );
};
