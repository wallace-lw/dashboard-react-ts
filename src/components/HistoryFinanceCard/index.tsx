/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */

import React from "react";
import { Container, Tag } from "./styles";

interface IHistoryCardProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinance: React.FC<IHistoryCardProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Container color={cardColor}>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  );
};

export default HistoryFinance;
