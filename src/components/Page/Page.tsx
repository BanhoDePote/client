import { NavBar } from 'src/components/NavBar/NavBar'
import { Container } from './styles'

export interface EmployeeProps {
  typeEmployee: 'Garçom' | 'Cozinha' | 'Caixa'
  nameEmployee: string
  image: string
}

export const Section = ({ children }: any) => {
  const nameEmployee = 'SAJIFD'
  const typeEmployee = 'Garçom'
  const image =
    'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'

  const userInfo: EmployeeProps = {
    nameEmployee,
    typeEmployee,
    image,
  }

  return (
    <Container>
      <NavBar EmployeeProps={userInfo} />
      {children}
    </Container>
  )
}
