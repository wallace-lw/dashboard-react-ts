/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import Switch from "react-switch";
import { Container, ToggleLabel } from "./styles";

const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleLabel>
        <BsSunFill color="#F7931B" />
        <Switch
          checked
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#28C2FF"
          offColor="#F7931B"
          height={10}
          width={40}
          handleDiameter={20}
          onChange={() => {
            console.log("just press it");
          }}
        />
        <BsFillMoonFill color="#28C2FF" />
      </ToggleLabel>
    </Container>
  );
};

export default Toggle;
