import { useState } from "react";
import "./App.css";
import FinishingUpComponent from "./components/FinishingUpComponent/FinishingUpComponent";
import SelectPlanComponent from "./components/SelectPlanComponent/SelectPlanComponent";
import ThankYouComponent from "./components/ThankYouComponent/ThankYouComponent";
import PersonalInfoComponent from "./components/PersonalInfoComponent/PersonalInfoComponent";
import AddOnsComponent from "./components/AddOnsComponent/AddOnsComponent";
import { UseYearOrMonthPlan } from "./contexts/useYearOrMonthPlanContext";

function App() {
  const { yearOrMonth, changePlan } = UseYearOrMonthPlan();

  const steps = [
    PersonalInfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    FinishingUpComponent,
    ThankYouComponent,
  ];
  const [stepIndex, setStepIndex] = useState(0);

  const renderStep = () => {
    const StepComponent = steps[stepIndex];
    return <StepComponent />;
  };

  const nextStep = () => {
    if (stepIndex === steps.length - 1) {
      return;
    }
    setStepIndex((prev) => prev + 1);
  };

  const prevStep = () => {
    if (stepIndex <= 0) {
      return;
    }

    setStepIndex((prev) => prev - 1);
  };

  return (
    <div className="App">
      <h1>hello world</h1>
      {yearOrMonth}
      {renderStep()}
      <button onClick={prevStep}>prev</button>
      <button onClick={() => changePlan()}>change</button>
      <button onClick={nextStep}> next</button>
    </div>
  );
}

export default App;
