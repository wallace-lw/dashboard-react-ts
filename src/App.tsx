/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import Layout from "./components/Layout";
import dark from "./styles/themes/dark";
import Dashboard from "./pages/Dashboard";
import Lists from "./pages/Lists";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Lists />
      </Layout>
    </ThemeProvider>
  );
};
export default App;
