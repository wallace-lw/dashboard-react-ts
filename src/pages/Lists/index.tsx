/* eslint-disable react/require-default-props */
import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Content, Filters } from "./styles";
import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinance from "../../components/HistoryFinanceCard";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frenquency: string;
  dateFormatted: string;
  tagColor: string;
}

const Lists: React.FC = () => {
  const params = useParams();

  const [data, setData] = useState<IData[]>([]);

  const title = useMemo(() => {
    return params.type === "entry-balance" ? "Entradas" : "Saídas";
  }, [params]);

  const listData = useMemo(() => {
    return params.type === "entry-balance" ? gains : expenses;
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

  useEffect(() => {
    const response = listData.map(item => {
      return {
        id: String(Math.random()),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frenquency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });
    setData(response);
  }, []);

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
        {data.map(item => (
          <HistoryFinance
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Lists;
