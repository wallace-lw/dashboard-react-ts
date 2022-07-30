import React from "react";
import { Grid } from "./styles";
import MainHeader from "../MainHeader";
import Content from "../Content";
import Aside from "../Aside";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Content>{children}</Content>
      <Aside />
    </Grid>
  );
};

export default Layout;
