/* eslint-disable react/function-component-definition */
import React from "react";
import { Container, Welcome, UserName, Profile } from "./styles";

const MainHeader: React.FC = () => {
  return (
    <Container>
      <h1>Toggle</h1>
      <Profile>
        <Welcome>
          Bem-vindo,
          <UserName> Wallace!</UserName>
        </Welcome>
      </Profile>
    </Container>
  );
};

export default MainHeader;
