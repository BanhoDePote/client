import styled from "styled-components"
import { Content } from "./DishOptions"


export const ChosenDish = ({order, setOrder, setCategory, category}) => {
    
    const handleClick = (dish) => {
      if (order.some(item => item.id === dish.id)) {
        setOrder((prevOrders) => prevOrders.filter(item => item.id !== dish.id))
      } else {
        setOrder((prevOrders) => [...prevOrders, { ...dish, quantity: 1 }])
      }
    }

    return (
      <Content>
        <h2>{category?.name}</h2>
        <ListDish>
          {category.dishes.map(dish => {
            return (
              <ItemBox
                onClick={() => handleClick(dish)}
                color={order.some(item => item.id === dish.id)}
              >
                <span>{dish.name}</span>
                <span>{dish.price.toFixed(2).replace('.', ',')} R$</span>
              </ItemBox>
            )
          })}
        </ListDish>
        <button onClick={() => setCategory(null)}>Voltar</button>
      </Content>
    )
  }


  const ListDish = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  padding: 4px;
  border: 2px solid #4b4949;
  gap: 4px;
  overflow-y: auto;
`


const ItemBox = styled.div`
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
    background-color: ${props => (props.color ? '#dd934e' : '')};
    color: ${props => (props.color ? 'white' : '')};
    &:hover {
      background-color: #dd934e;
      cursor: pointer;
    }


`