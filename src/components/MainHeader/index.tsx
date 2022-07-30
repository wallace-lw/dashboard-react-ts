import React from "react";
import Toggle from "../Toggle";
import { Container, Welcome, UserName, Profile } from "./styles";

const MainHeader: React.FC = () => {
  return (
    <Container>
      <Toggle />
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
