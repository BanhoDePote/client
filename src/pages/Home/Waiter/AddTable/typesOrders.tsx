import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'src/components/Modal'
import { useAxios } from 'src/hooks/useApi'
import { User } from 'src/store'
import styled from 'styled-components'

export const TypesOrders = ({ modalOpen, setModalOpen }) => {
  const [order, setOrder] = useState([])
  const dataUser: User = useSelector(state => state?.data?.dataUser)
  const [category, setCategory] = useState(null)
  const navigate = useNavigate()

  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `/waiter/dish`,
    headers: {
      accept: '*/*',
      Authorization: 'Bearer ' + dataUser?.token,
    },
  })

  const dishes = response?.data
  useEffect(() => {
    if (!dataUser) navigate('/home')

    console.log(order)
  }, [dishes, category, order])

  const SelectDish = () => {
    return (
      <Content>
        <h3>Adicionar Pedido</h3>
        <TypesDish>
          {dishes?.map(category => (
            <span
              onClick={() => {
                setCategory(category)
              }}
            >
              {category.name}
            </span>
          ))}
        </TypesDish>
        <ListOrders>
          {order.map(item => (
            <span>{item.name}</span>
          ))}
        </ListOrders>
      </Content>
    )
  }

  const ChosenDish = () => {
    const handleClick = dish => {
      if (order.some(item => item.id === dish.id)) {
        setOrder(prevOrders => prevOrders.filter(item => item.id !== dish.id)) 
      } else {
        setOrder(prevOrders => [...prevOrders, dish]) 
      }
    }

    return (
      <Content>
        <h2>{category?.name}</h2>
        <ListDish>
          {category.dishes.map(dish => {
            return (
              <ItemBox onClick={() => handleClick(dish)}  color={order.includes(dish)}>
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

  const selectDish = category ? <ChosenDish /> : <SelectDish />

  return (
    <Modal
      isOpen={modalOpen}
      onClose={() => {
        setModalOpen(false)
      }}
    >
      {selectDish}
    </Modal>
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
    background-color: ${props => props.color ? '#dd934e' : ''};
    color: ${props => props.color ? 'white' : ''};
    &:hover {
      background-color: #dd934e;
      cursor: pointer;
    }
  }

`


const Content = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

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
    border: 1px solid #979797;
    color: #4e4e4e;
    cursor: pointer;

    &:hover {
      filter: brightness(1.3);
    }
  }
`

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
`
