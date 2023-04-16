import React from 'react'
import { Waiter } from './Waiter/Waiter'
import { useSelector } from 'react-redux'
import { User } from 'src/store'
import { Section } from 'src/components/Page/Page'
import { useNavigate } from 'react-router-dom'

const screenEmployee = [
  { name: 'Garçom', element: <Waiter /> },
  { name: 'Caixa', element: <Waiter /> },
]

export function Home(params: any) {
  
  const user = useSelector((state: User) => state?.data?.data?.dataUser)


  const Employee = user && screenEmployee.find(screen => screen.name === user.user.employee)

  console.log(user)

  return <Section>{Employee?.element}</Section>
}
