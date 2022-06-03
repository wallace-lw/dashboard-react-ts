/* eslint-disable react/function-component-definition */
import React from "react";
import {
  AiFillDollarCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";

import {
  Container,
  Header,
  MenuContainer,
  MenuItemLink,
  IconDiv,
  Heading,
} from "./styles";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <IconDiv>
          <AiFillDollarCircle color="#F7931B" size="40px" />
        </IconDiv>
        <Heading>Minha Carteira</Heading>
      </Header>

      <MenuContainer>
        <MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="#">
          <AiOutlineArrowUp />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="#">
          <AiOutlineArrowDown />
          Saídas
        </MenuItemLink>
        <MenuItemLink href="#">
          <BsBoxArrowInRight />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
