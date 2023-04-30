import styled from "styled-components";
import { Content } from ".";
import React, { useState } from "react";
import { useCreateOrder } from "../../../../../services/createOrder";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";

export const SelectDish = ({
  order,
  setOrder,
  setCategory,
  dishes,
  dataUser,
  tableId,
}) => {
  const [loading, setLoading] = useState(false);
  const [createOrder, result, isLoading, error] = useCreateOrder(
    tableId,
    dataUser?.token,
    order
  );
  const navigate = useNavigate();

  const handleQuantityChange = (action, index) => {
    const updatedOrder = [...order];
    if (action === "add") {
      updatedOrder[index].quantity += 1;
    } else if (action === "remove" && updatedOrder[index].quantity > 1) {
      updatedOrder[index].quantity -= 1;
    } else if (action === "exclude") {
      updatedOrder.splice(index, 1);
    }
    setOrder(updatedOrder);
  };

  const SendOrder = () => {
    setLoading(true);
    try {
      createOrder().then(() => {
        toast.success("Pedido criado com Sucesso!");
        navigate("/home");
      });
    } catch {
      toast.error("Problema ao enviar Pedido!");
      setLoading(false);
    }
  };

  console.log(result);
  return (
    <Content>
      <h2>Adicionar Pedido Mesa #{tableId}</h2>
      <TypesDish>
        {dishes?.map((category, index) => (
          <span
            key={index}
            onClick={() => {
              setCategory(category);
            }}
          >
            {category.name}
          </span>
        ))}
      </TypesDish>
      <ListOrders>
        {order.map((item, index) => (
          <div key={index}>
            {item.name}
            <div className="buttons">
              <button onClick={() => handleQuantityChange("remove", index)}>
                -
              </button>
              {item.quantity}
              <button onClick={() => handleQuantityChange("add", index)}>
                +
              </button>
              <button onClick={() => handleQuantityChange("exclude", index)}>
                x
              </button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>TOTAL</span>
          <span>
            {order
              .reduce((acumulo, item) => {
                return acumulo + item.price * item.quantity;
              }, 0)
              .toFixed(2)}{" "}
            R$
          </span>
        </div>
      </ListOrders>
      <div className="buttonsOrder">
        {loading ? (
          <FadeLoader color={"white"} />
        ) : (
          <>
            <button onClick={() => SendOrder()}>Criar Pedido</button>
            <button onClick={() => setOrder([])}>Limpar Pedido</button>
          </>
        )}
      </div>
    </Content>
  );
};

const TypesDish = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  span {
    padding: 5px 12px;
    border-radius: 6px;
    background-color: #d2d2d2;
    border: 1px solid #17459b;
    color: #17459b;
    cursor: pointer;

    &:hover {
      filter: brightness(1.3);
    }
  }
`;

const ListOrders = styled.div`
  margin-top: 10px;
  background-color: #d9d9d9;
  width: 100%;
  border: 1px solid black;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 4px;
  overflow-y: scroll;
  padding-bottom: 16px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .buttons {
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 20px;
        border: 1px solid #6d6969;
        color: white;
        text-align: center;
        svg {
          width: 5px;
          height: 5px;
        }
        &:hover {
          filter: brightness(1.4);
        }
      }
      button:nth-of-type(1) {
        background-color: #003cff;
      }
      button:nth-of-type(2) {
        background-color: #ee7a1c;
      }
      button:nth-of-type(3) {
        background-color: red;
      }
    }
  }
  .total {
    position: absolute;
    left: 0;
    bottom: 70px;
    background-color: #ffffff8f;
    border-top: #6d6969;
    padding: 0 30px;
  }
`;
