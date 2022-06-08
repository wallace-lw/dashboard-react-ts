/* eslint-disable react/function-component-definition */
import React from "react";

import { Container, Content } from "./styles";
import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinance from "../../components/HistoryFinanceCard";

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
      label: "Ana",
    },
  ];
  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options} />
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2002"
          amount="R$ 225,43"
        />
      </Content>
    </Container>
  );
};

export default Lists;
