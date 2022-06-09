/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, Content, Filters } from "./styles";
import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinance from "../../components/HistoryFinanceCard";

const Lists: React.FC = () => {
  const params = useParams();

  const title = useMemo(() => {
    return params.type === "entry-balance" ? "Entradas" : "Saídas";
  }, [params]);

  const months = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
    { value: 3, label: "Março" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Maio" },
    { value: 6, label: "Junho" },
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];

  const years = [
    { value: 2022, label: "2022" },
    { value: 2021, label: "2021" },
    { value: 2020, label: "2020" },
  ];

  return (
    <Container>
      <ContentHeader title={title} lineColor="#E44C4E">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
        <HistoryFinance
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="06/06/2022"
          amount="R$ 225,43"
        />
      </Content>
    </Container>
  );
};

export default Lists;
