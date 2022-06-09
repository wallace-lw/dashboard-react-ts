/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import dark from "./styles/themes/dark";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};
export default App;
