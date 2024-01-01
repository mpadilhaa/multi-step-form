import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UseYearOrMonthProvider } from "./contexts/useYearOrMonthPlanContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseYearOrMonthProvider>
      <App />
    </UseYearOrMonthProvider>
  </React.StrictMode>
);
