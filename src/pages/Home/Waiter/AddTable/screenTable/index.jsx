import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Section } from "../../../../../components/Page/Page";
import styled from "styled-components";
import { DishOptions } from "./DishOptions";
import { AiOutlineSolution } from "react-icons/ai";
import { useAxios } from "../../../../../hooks/useApi";

export const ScreenTable = () => {
  const { tableId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `/waiter/table/${tableId}`
  })

  console.log("response", response)


  return (
    <Section>
      <TableTitle>Mesa {tableId}</TableTitle>
      <DivButtons>
        <DishOptions modalOpen={modalOpen} tableId={tableId} setModalOpen={setModalOpen} />
        <ButtonOption
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <AiOutlineSolution size={50} />
          <span>Adicionar Pedido</span>
        </ButtonOption>
      </DivButtons>
    </Section>
  );
};

const TableTitle = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  height: 58px;
  background: #d9d9d9;
  border: 1px solid #8f8f8f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
`;

const DivButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 45px;
`;

const ButtonOption = styled.div`
  width: 90px;
  height: 90px;
  background-color: #cf2b2b;
  border-radius: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  span {
    position: absolute;
    text-align: center;
    bottom: -15px;
    color: #333131;
    font-size: x-small;
  }

  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }
`;
