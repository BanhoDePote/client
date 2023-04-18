import React, { useEffect, useState } from 'react'
import { Waiter } from './Waiter'
import { useSelector } from 'react-redux'
import { User } from 'src/store'
import { Section } from 'src/components/Page/Page'

interface UserWithProp extends User {
  user: {
    name: string
    employee: string
    // outras propriedades do usuário
  }
}

export function Home() {
  const dataUser = useSelector((state: User) => state?.data?.dataUser);
  const [user, setUser] = useState<UserWithProp | null>(dataUser)
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
