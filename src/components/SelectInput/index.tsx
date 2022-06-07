/* eslint-disable react/function-component-definition */
import React from "react";
import { Container } from "./styles";

interface ISelectProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const SelectInput: React.FC<ISelectProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map(option => (
          <option key={`${Math.random()}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default SelectInput;
