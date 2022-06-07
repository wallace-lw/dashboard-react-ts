/* eslint-disable react/function-component-definition */
import React from "react";

import { Container } from "./styles";
import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";

const Lists: React.FC = () => {
  const options = [
    {
      value: "Rodrigo",
      label: "Rodrigo",
    },
    {
      value: "Maria",
      label: "Maria",
    },
    {
      value: "Ana",
      label: "Rodrigo",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options} />
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Lists;
