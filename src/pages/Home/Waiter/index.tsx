import React, { useEffect, useState } from 'react'
import { AddTable } from './AddTable/addTable'
import axios from 'axios'
import styled from 'styled-components'
import { socket } from 'src/utils/wsocket'

export const Waiter = ({ user }: any) => {
  const [mesas, setMesas] = useState(null)
  const [mesasSocket, setMesasSocket] = useState([])

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    }
    axios
      .get('http://localhost:4000/waiter/', config)
      .then(data => setMesas(data.data))

    socket.on('orders', (data) => {
      console.log("soket", data)
      setMesasSocket(data)
    })

    return () => {
      socket.off('orders')
    }
  }, [user.token])

  useEffect(() => {
    
  }, [mesasSocket])

  return (
    <>
      <AddTable />
      <Tables>
        <div className='border'>
          <span>Minhas Mesas</span>
        </div>
        {mesasSocket?.map((mesa) => {
            return <Table data={mesa}/>
          })}
      </Tables>
    </>
  )
}

const Table = ({data}:{id:number, tableId:number}) =>{


  console.log(data)
  return <Mesa key={data.id}> Mesa {data.tableId}</Mesa>

}

const Tables = styled.div`
    margin-top: 100px;
  flex-direction: column;
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  .border {
    width: 441px;
    height: 40px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cf2b2b;
    color: white;
  }
`

const Mesa = styled.div`
  width: 80%;
  height: 30px;
  background-color: #D9D9D9;
  border:1px solid #8f8f8f;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));

  &:hover{

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
    cursor: pointer;

  }
`
