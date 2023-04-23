import React, { useEffect, useState } from 'react'
import { Waiter } from './Waiter'
import { useSelector } from 'react-redux'
import { Section } from '../../components/Page/Page'


export function Home() {
  const dataUser = useSelector((state) => state?.data?.dataUser);
  const [user, setUser] = useState(dataUser)
  console.log("home", dataUser)

  const screenEmployee = [
    { name: 'Garçom', element: <Waiter user={dataUser}/> },
    { name: 'Caixa', element: <Waiter /> },
  ]
  useEffect(()=>{

  }, [dataUser])

  const Employee = dataUser && screenEmployee.find(screen => screen.name === dataUser?.user?.employee)


  return <Section>{Employee?.element}</Section>
}
