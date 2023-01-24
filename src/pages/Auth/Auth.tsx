import { TextExample } from 'src/components/TextExample/TextExample'
import { typesEmployee } from 'src/utils/images'
import { Container, EmployeeDiv, EmployeeItem } from './styles'

const Employee = () => {
  const employee = typesEmployee.map(eemployee => {
    return (
      <EmployeeItem key={eemployee.type}>
        <div className="image">
          <img src={eemployee.icon} alt={eemployee.type} />
        </div>
        <span>{eemployee.type}</span>
      </EmployeeItem>
    )
  })

  return <EmployeeDiv>{employee}</EmployeeDiv>
}

export const Auth = () => {
  return (
    <Container>
      <TextExample>BanhoDePote</TextExample>
      <Employee />
    </Container>
  )
}
