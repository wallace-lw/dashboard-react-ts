/* eslint-disable react/function-component-definition */
import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Lists from "../pages/Lists";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list/:type" element={<Lists />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRoutes;
