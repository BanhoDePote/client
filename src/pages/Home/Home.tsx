import React from 'react'
import { Waiter } from './Waiter'
import { useSelector } from 'react-redux'
import { User } from 'src/store'
import { Section } from 'src/components/Page/Page'
import { useNavigate } from 'react-router-dom'



export function Home(params: any) {
  
  const user = useSelector((state: User) => state?.data?.data?.dataUser)

  const screenEmployee = [
    { name: 'Garçom', element: <Waiter user={user}/> },
    { name: 'Caixa', element: <Waiter /> },
  ]
  console.log(user);
  
  const Employee = user && screenEmployee.find(screen => screen.name === user.user.employee)


  return <Section>{Employee?.element}</Section>
}
