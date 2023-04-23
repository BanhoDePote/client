import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../../../../components/Modal'
import { useAxios } from '../../../../../hooks/useApi'
import styled from 'styled-components'
import { ChosenDish } from './chosenDish'
import { SelectDish } from './SelectDish'

export const TypesOrders = ({ modalOpen, setModalOpen }) => {
  const [order, setOrder] = useState([])
  const dataUser = useSelector((state) => state?.data?.dataUser)
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

    console.log("order", order)
  }, [dishes, category, order])


  const selectDish = category ? <ChosenDish order={order} setOrder={setOrder} category={category} setCategory={setCategory} /> 
                              : <SelectDish order={order} setOrder={setOrder} dishes={dishes} setCategory={setCategory} /> 

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




export const Content = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .buttonsOrder{
    margin-top: 10px;
    display: flex;
    gap: 10px;
    
    button{
      width: 100px;
      border-radius: 10px;
      height: 40px;
      border: 1px solid #6d6969;
        color: white;

        &:hover {
          filter: brightness(1.2);
        }
    }

    button:nth-of-type(1) {
        background-color: #1ab00e;
      }
      button:nth-of-type(2) {
        background-color: #db1010;
      }
  }
`

