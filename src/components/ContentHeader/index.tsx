/* eslint-disable react/function-component-definition */

import React from "react";
import { Container, Controllers, TitleContainer } from "./styles";

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>
      <Controllers>
        <button type="button">Botão A</button>
        <button type="button">Botão B</button>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;