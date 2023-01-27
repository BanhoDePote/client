import { EmployeeProps } from 'src/pages/Home/Home'
import { Container } from './styles'

interface NavBarProps {
  EmployeeProps: EmployeeProps
}

// eslint-disable-next-line no-shadow
export const NavBar: React.FC<NavBarProps> = ({ EmployeeProps }) => {
  return (
    <Container>
      <div>
        <h1>BanhoDePote</h1>
        <span>
          {EmployeeProps.typeEmployee} {EmployeeProps.nameEmployee}
        </span>
      </div>
      <img src={EmployeeProps.image} alt={EmployeeProps.nameEmployee} />
    </Container>
  )
}
