/* eslint-disable react/function-component-definition */
import React from "react";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Dashboard />
    </>
  );
};
export default App;
