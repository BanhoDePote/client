import { ReactNode } from 'react'
import { Container } from './styles'

interface EmployeeProps {
  typeEmployee: 'Garçom' | 'Cozinha' | 'Caixa'
  nameEmployee: string
  image: string
}

export const NavBar = ({
  typeEmployee,
  nameEmployee,
  image,
}: EmployeeProps) => {
  return (
    <Container>
      <div>
        <h1>BanhoDePote</h1>
        <span>
          {typeEmployee} {nameEmployee}
        </span>
      </div>
      <img src={image} alt={nameEmployee} />
    </Container>
  )
}
