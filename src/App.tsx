/* eslint-disable react/function-component-definition */
import React from "react";
import GlobalStyles from "./styles/global";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout />
    </>
  );
};
export default App;
